-- =====================================================
-- Supabase 数据库表结构脚本
-- 项目: 复兴机械厂官网数据迁移 (JSONBin.io -> Supabase)
-- 执行位置: Supabase Dashboard -> SQL Editor
-- =====================================================

-- 1. 创建留言表 (messages)
-- =====================================================
CREATE TABLE messages (
  id BIGINT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100),
  company VARCHAR(200),
  type VARCHAR(50),
  content TEXT NOT NULL,
  date VARCHAR(50) NOT NULL,
  stars INTEGER DEFAULT 5,
  status VARCHAR(20) DEFAULT 'new',
  source VARCHAR(20) DEFAULT 'web',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引提高查询性能
CREATE INDEX idx_messages_status ON messages(status);
CREATE INDEX idx_messages_date ON messages(date DESC);
CREATE INDEX idx_messages_source ON messages(source);

-- 设置 RLS (Row Level Security) 策略
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 允许匿名读取
CREATE POLICY "Allow public read access" ON messages
  FOR SELECT
  USING (true);

-- 允许匿名插入
CREATE POLICY "Allow public insert access" ON messages
  FOR INSERT
  WITH CHECK (true);

-- 允许匿名更新（用于标记已处理）
CREATE POLICY "Allow public update access" ON messages
  FOR UPDATE
  USING (true);

-- 允许匿名删除（管理员操作）
CREATE POLICY "Allow public delete access" ON messages
  FOR DELETE
  USING (true);

-- 2. 创建图片配置表 (images_config)
-- =====================================================
CREATE TABLE images_config (
  key VARCHAR(100) PRIMARY KEY,
  url TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 设置 RLS 策略
ALTER TABLE images_config ENABLE ROW LEVEL SECURITY;

-- 允许匿名读取
CREATE POLICY "Allow public read access" ON images_config
  FOR SELECT
  USING (true);

-- 允许匿名插入/更新/删除
CREATE POLICY "Allow public write access" ON images_config
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- 执行完毕后，请在 Supabase Dashboard -> Table Editor 中验证：
-- 1. messages 表已创建，包含所有字段和索引
-- 2. images_config 表已创建
-- 3. RLS 策略已正确配置
-- =====================================================
