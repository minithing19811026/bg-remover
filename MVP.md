# Image Background Remover - MVP 需求文档

## 1. 项目概述

| 项目 | 说明 |
|------|------|
| 产品名称 | Image Background Remover |
| 产品类型 | 在线图片处理工具 (Web App) |
| 核心功能 | 一键移除图片背景，快速生成透明背景图片 |
| 目标用户 | 设计师、电商运营、内容创作者 |

---

## 2. 功能需求

### 2.1 核心功能 (MVP)

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 图片上传 | 支持拖拽或点击上传图片 | P0 |
| 背景移除 | 一键移除图片背景 | P0 |
| 结果预览 | 显示处理前后对比 | P0 |
| 图片下载 | 支持 PNG 格式下载 | P0 |
| 进度提示 | 处理中显示加载动画 | P1 |

### 2.2 技术实现

| 组件 | 技术选择 |
|------|----------|
| 前端框架 | Next.js 14 + TypeScript |
| 样式 | Tailwind CSS |
| 托管平台 | Cloudflare Pages |
| 后端 API | Cloudflare Workers |
| 图片处理 API | remove.bg |

### 2.3 架构

```
用户浏览器 
    ↓
Cloudflare Pages (Next.js 前端)
    ↓
Cloudflare Workers (API 代理)
    ↓
remove.bg API
    ↓
返回结果给用户
```

### 2.4 支持格式

- 输入: JPG, PNG, WEBP
- 输出: PNG (透明背景)

### 2.5 限制

- 单张图片最大 10MB
- 免费版每月 50 次处理 (remove.bg 免费额度)

---

## 3. 界面设计

### 3.1 页面结构

1. **首页**: 
   - 标题和描述
   - 上传区域（拖拽/点击）
   - 支持格式提示

2. **处理页**: 
   - 原图预览
   - 处理结果预览
   - 下载按钮
   - 上传新图片按钮

3. **加载状态**:
   - 进度动画
   - 处理中提示

### 3.2 配色

- 主色: 紫色渐变 (#667eea → #764ba2)
- 背景: 浅紫色渐变
- 卡片: 白色背景 + 圆角
- 文字: 深灰色

---

## 4. 部署流程

### 4.1 GitHub 仓库

- 仓库名: `bg-remover`
- 自动触发部署

### 4.2 Cloudflare Pages

- Build command: `npm run build`
- Build output: `.next`

### 4.3 Cloudflare Workers

- API 代理服务
- 解决 remove.bg CORS 问题

---

## 5. 后续迭代 (Phase 2)

- [ ] 支持批量处理
- [ ] 自定义输出尺寸
- [ ] 用户认证 (保存历史记录)
- [ ] 对接其他 API (降低依赖)
- [ ] 移动端优化
- [ ] 国际化支持
