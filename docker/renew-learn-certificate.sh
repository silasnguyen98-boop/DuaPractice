#!/bin/sh
set -eu
/usr/bin/docker compose -f /home/ubuntu/Duadata/docker-compose.yml run --rm --no-deps --entrypoint certbot certbot renew --cert-name learn.duadata.net --quiet
/usr/bin/docker exec duadata-nginx nginx -t
/usr/bin/docker exec duadata-nginx nginx -s reload
