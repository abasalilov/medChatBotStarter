<!-- server {
  listen 80;
  # Type your domain name below
  server_name adedevelopment.com www.adedevelopment.com;
  return 301 https://$server_name$request_uri;
}

server {

  listen 443 ssl;

  # Type your domain name below
  server_name adedevelopment.com www.adedevelopment.com;

  # Configure the Certificate and Key you got from your CA (e.g. Lets Encrypt)
  ssl_certificate /etc/letsencrypt/live/adedevelopment.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/adedevelopment.com/privkey.pem;

  ssl on;
  ssl_session_cache builtin:1000 shared:SSL:10m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

  # Only use ciphersuites that are considered modern and secure by Mozilla
  ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256';

  # Do not let attackers downgrade the ciphersuites in Client Hello
  # Always use server-side offered ciphersuites
  ssl_prefer_server_ciphers on;

  # HSTS (ngx_http_headers_module is required) (15768000 seconds = 6 months)
  add_header Strict-Transport-Security max-age=15768000;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

} -->
