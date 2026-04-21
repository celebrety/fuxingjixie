# JSONBin.io 数据同步方案

## 方案概述

使用 **JSONBin.io** 作为云端 JSON 存储服务，实现跨设备数据同步。

### 优势
- ✅ 完全免费，无需信用卡
- ✅ 注册简单，即刻可用
- ✅ 提供 REST API，无需 SDK
- ✅ 100,000 次请求/月（足够使用）
- ✅ 支持 CORS，可直接从浏览器调用

## 实施步骤

### 步骤 1: 注册 JSONBin.io

1. 访问 https://jsonbin.io
2. 点击 "Sign Up" 注册账号（支持 GitHub/Google 登录）
3. 登录后，在 Dashboard 获取 **API Key**（X-Master-Key）

### 步骤 2: 创建数据仓库（Bin）

注册后，需要创建两个 Bin：
- **Bin 1**: 存储留言数据（Messages）
- **Bin 2**: 存储图片配置（Images）

#### 创建留言 Bin
```bash
curl -X POST https://api.jsonbin.io/v3/b \
  -H "Content-Type: application/json" \
  -H "X-Master-Key: 你的API_KEY" \
  -d '{"messages": []}'
```

返回示例：
```json
{
  "metadata": {
    "id": "65xxxxxxxxxxxxxx"  // 这是 Bin ID，需要保存
  }
}
```

#### 创建图片 Bin
```bash
curl -X POST https://api.jsonbin.io/v3/b \
  -H "Content-Type: application/json" \
  -H "X-Master-Key: 你的API_KEY" \
  -d '{"images": {}}'
```

### 步骤 3: 配置信息

您需要记录以下信息：
```javascript
const CONFIG = {
  // JSONBin.io 配置
  API_KEY: '你的X-Master-Key',
  MESSAGES_BIN_ID: '留言Bin的ID',
  IMAGES_BIN_ID: '图片Bin的ID'
};
```

## API 使用示例

### 读取数据
```javascript
// 获取留言数据
async function getMessages() {
  const response = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.MESSAGES_BIN_ID}/latest`, {
    method: 'GET',
    headers: {
      'X-Master-Key': CONFIG.API_KEY
    }
  });
  const data = await response.json();
  return data.record.messages || [];
}
```

### 保存数据
```javascript
// 保存留言数据
async function saveMessages(messages) {
  const response = await fetch(`https://api.jsonbin.io/v3/b/${CONFIG.MESSAGES_BIN_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': CONFIG.API_KEY
    },
    body: JSON.stringify({ messages: messages })
  });
  return response.json();
}
```

### 添加留言
```javascript
async function addMessage(message) {
  const messages = await getMessages();
  messages.unshift({
    ...message,
    id: Date.now(),
    createdAt: new Date().toISOString()
  });
  await saveMessages(messages);
}
```

## 安全说明

### ⚠️ 重要：API Key 安全问题

由于这是纯前端项目，API Key 会暴露在代码中。对于小型项目这是可接受的，但建议：

1. **使用只读 Key**（如果 JSONBin.io 支持）
2. **设置 CORS 限制**（仅允许您的域名访问）
3. **定期更换 Key**

### 改进方案（可选）

如果需要更高的安全性，可以使用免费的 Cloudflare Workers 作为代理：

```javascript
// Cloudflare Worker 代码
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 验证来源
  const origin = request.headers.get('Origin')
  if (origin !== 'https://yourdomain.com') {
    return new Response('Unauthorized', { status: 403 })
  }
  
  // 转发请求到 JSONBin.io
  const url = new URL(request.url)
  const targetUrl = `https://api.jsonbin.io/v3${url.pathname}`
  
  const headers = new Headers(request.headers)
  headers.set('X-Master-Key', '你的密钥')
  
  return fetch(targetUrl, {
    method: request.method,
    headers: headers,
    body: request.body
  })
}
```

## 完整代码实现

见 index.html 和 admin.html 的修改。

## 成本估算

- **免费额度**: 100,000 次请求/月
- **预估使用**: 
  - 每天 50 条留言 = 100 次请求（读+写）
  - 每天 20 次图片加载 = 20 次请求
  - 每月约 3,600 次请求
  
**结论**: 免费额度完全够用！

## 备用方案

如果 JSONBin.io 不可用，还有以下选择：

1. **Firebase Realtime Database** - Google 出品，免费额度大
2. **Supabase** - 开源 Firebase 替代品
3. **Airtable** - 表格形式的数据库
4. **GitHub Gist** - 完全免费，但速度较慢
