# DNS Configuration for fahadshoukat.com

## Step-by-Step DNS Setup

### Option 1: A Records (Recommended for Apex Domain)

Add **4 A records** pointing to GitHub Pages IP addresses:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| A | @ | 185.199.108.153 | 3600 (or default) |
| A | @ | 185.199.109.153 | 3600 (or default) |
| A | @ | 185.199.110.153 | 3600 (or default) |
| A | @ | 185.199.111.153 | 3600 (or default) |

**Notes:**
- `@` means the root domain (fahadshoukat.com)
- Some registrars use blank/empty for the root domain
- TTL can be set to default (usually 3600 seconds = 1 hour)

### Option 2: CNAME Record (Alternative - for www subdomain)

If you want to use `www.fahadshoukat.com` instead:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | www | fahsho.github.io | 3600 (or default) |

**Note:** You cannot use CNAME for the apex domain (fahadshoukat.com) - only A records work for the root domain.

---

## Common Registrar Instructions

### Namecheap
1. Log in → Domain List → Manage next to fahadshoukat.com
2. Go to **Advanced DNS** tab
3. Under **Host Records**, click **Add New Record**
4. For each IP, add:
   - Type: **A Record**
   - Host: **@**
   - Value: **185.199.108.153** (then repeat for other 3 IPs)
   - TTL: **Automatic** or **30 min**
5. Click the checkmark to save each record

### GoDaddy
1. Log in → My Products → DNS (next to fahadshoukat.com)
2. Scroll to **Records** section
3. Click **Add** button
4. For each IP, add:
   - Type: **A**
   - Name: **@**
   - Value: **185.199.108.153** (then repeat for other 3 IPs)
   - TTL: **600 seconds** (default)
5. Click **Save** for each record

### Google Domains / Squarespace Domains
1. Log in → My domains → fahadshoukat.com
2. Click **DNS** or **DNS Settings**
3. Under **Custom resource records**
4. For each IP, add:
   - Type: **A**
   - Name: **@** (or leave blank)
   - Data: **185.199.108.153** (then repeat for other 3 IPs)
   - TTL: **3600**
5. Click **Add** for each record

### Cloudflare
1. Log in → Select your domain
2. Go to **DNS** → **Records**
3. For each IP, click **Add record**:
   - Type: **A**
   - Name: **@** (or your root domain)
   - IPv4 address: **185.199.108.153** (then repeat for other 3 IPs)
   - Proxy status: **DNS only** (gray cloud, not orange)
   - TTL: **Auto**
4. Click **Save** for each record

**Important for Cloudflare:** Make sure the proxy is **OFF** (gray cloud) for GitHub Pages to work correctly.

### Other Registrars
The process is similar:
- Look for DNS Management, DNS Settings, or Name Servers
- Add 4 A records with Type=A, Name=@ (or blank), Value=each of the 4 IPs above

---

## After Adding DNS Records

### 1. Configure GitHub Pages Custom Domain
1. Go to your GitHub repository: `https://github.com/fahsho/fahadwebsite`
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `fahadshoukat.com`
4. Check **Enforce HTTPS** (will be available after DNS propagates)
5. Click **Save**

### 2. Wait for DNS Propagation
- DNS changes can take **15 minutes to 48 hours** to propagate globally
- Usually takes **1-4 hours** in most cases
- You can check propagation status at: https://www.whatsmydns.net/#A/fahadshoukat.com

### 3. Verify DNS is Working
Run these commands in your terminal:
```bash
# Check if A records are set correctly
dig fahadshoukat.com +short

# Should return the 4 GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

Or use online tools:
- https://www.whatsmydns.net/#A/fahadshoukat.com
- https://dnschecker.org/#A/fahadshoukat.com

### 4. Verify GitHub Pages Configuration
After DNS propagates:
1. Go back to **Settings** → **Pages**
2. You should see a green checkmark next to the custom domain
3. **Enforce HTTPS** option will become available
4. Enable **Enforce HTTPS** for secure connections

---

## Troubleshooting

### DNS Not Propagating
- Wait at least 1-2 hours after making changes
- Clear your browser cache and DNS cache:
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  
  # Windows
  ipconfig /flushdns
  
  # Linux
  sudo systemd-resolve --flush-caches
  ```

### GitHub Shows "Not yet available"
- Wait for DNS to fully propagate (can take up to 48 hours)
- Verify A records are correct using dig or online DNS checker
- Make sure you added all 4 A records, not just one

### Site Not Loading
- Check that the CNAME file exists in your repository (`public/CNAME`)
- Verify the workflow has successfully deployed
- Check GitHub Pages settings show the custom domain is verified
- Try accessing via `http://fahadshoukat.com` first (before HTTPS is enabled)

### HTTPS Not Working
- HTTPS will only work after:
  1. DNS is fully propagated
  2. GitHub verifies the domain
  3. You enable "Enforce HTTPS" in GitHub Pages settings
- This can take a few hours after DNS propagation

---

## Quick Reference

**GitHub Pages IP Addresses:**
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**Your Repository:** `fahsho/fahadwebsite`  
**Custom Domain:** `fahadshoukat.com`  
**GitHub Username:** `fahsho`




