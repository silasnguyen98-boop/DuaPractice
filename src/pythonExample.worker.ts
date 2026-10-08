type Runtime = {
  loadPackagesFromImports: (code: string) => Promise<void>
  loadPackage: (packages: string[]) => Promise<void>
  runPythonAsync: (code: string) => Promise<unknown>
  setStdout: (options: { batched: (text: string) => void }) => void
  setStderr: (options: { batched: (text: string) => void }) => void
}
const workerScope = globalThis as unknown as {
  importScripts: (url: string) => void
  loadPyodide: (options: { indexURL: string }) => Promise<Runtime>
  postMessage: (message: unknown) => void
  onmessage: ((event: MessageEvent<string>) => void) | null
}
let runtime: Promise<Runtime> | undefined
workerScope.onmessage = async event => {
  const lines: string[] = []
  try {
    workerScope.postMessage({ status: 'Đang chuẩn bị Python...' })
    if (!runtime) {
      workerScope.importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js')
      runtime = workerScope.loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' }).catch(error => { runtime = undefined; throw error })
    }
    const py = await runtime
    const code = event.data
    workerScope.postMessage({ status: 'Đang tải thư viện và chạy code...' })
    await py.loadPackagesFromImports(code)
    const hasPlots = /(?:^|\n)\s*(?:import\s+matplotlib|from\s+matplotlib)/.test(code)
    if (hasPlots) {
      await py.loadPackage(['matplotlib'])
      await py.runPythonAsync('import matplotlib\nmatplotlib.use("Agg")\nimport matplotlib.pyplot as __example_plt\n__example_plt.close("all")')
    }
    py.setStdout({ batched: text => lines.push(text) })
    py.setStderr({ batched: text => lines.push(text) })
    await py.runPythonAsync(`__example_scope = {"__name__": "__main__"}\nexec(compile(${JSON.stringify(code)}, "example.py", "exec"), __example_scope)`)
    let plots: string[] = []
    if (hasPlots) {
      const output = await py.runPythonAsync(`
import io as __example_io, base64 as __example_base64, json as __example_json
__example_images = []
for __example_number in __example_plt.get_fignums():
    __example_buffer = __example_io.BytesIO()
    __example_plt.figure(__example_number).savefig(__example_buffer, format="png", bbox_inches="tight", dpi=120)
    __example_images.append(__example_base64.b64encode(__example_buffer.getvalue()).decode("ascii"))
__example_json.dumps(__example_images)
`)
      plots = JSON.parse(String(output)) as string[]
    }
    workerScope.postMessage({ output: lines.join('\n') || 'Code đã chạy. Dùng print() để hiển thị giá trị.', plots })
  } catch (error) { workerScope.postMessage({ error: error instanceof Error ? error.message : String(error), output: lines.join('\n') }) }
}
