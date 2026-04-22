-- =====================================================
-- Supabase 数据库表结构升级脚本
-- 功能: 添加 display_items 表支持动态设备/产品管理
-- 执行位置: Supabase Dashboard -> SQL Editor
-- =====================================================

-- 1. 创建展示项目表 (display_items)
-- =====================================================
CREATE TABLE IF NOT EXISTS display_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category VARCHAR(50) NOT NULL,        -- 分类: 'equipment' 或 'product'
  sort_order INTEGER DEFAULT 0,         -- 排序序号
  title_zh VARCHAR(200) NOT NULL,       -- 中文标题
  title_en VARCHAR(200),                -- 英文标题
  title_ja VARCHAR(200),                -- 日文标题
  description_zh TEXT,                  -- 中文描述
  description_en TEXT,                  -- 英文描述
  description_ja TEXT,                  -- 日文描述
  image_url TEXT,                       -- 图片URL
  image_key VARCHAR(100),               -- 兼容旧系统的key (如 'prod-1')
  specs JSONB DEFAULT '[]'::jsonb,      -- 规格参数: [{"label":"精度","value":"±0.003mm"}]
  tags JSONB DEFAULT '[]'::jsonb,       -- 标签: ["数控机床","高精度"]
  is_active BOOLEAN DEFAULT true,       -- 是否启用
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引提高查询性能
CREATE INDEX IF NOT EXISTS idx_display_items_category ON display_items(category);
CREATE INDEX IF NOT EXISTS idx_display_items_sort ON display_items(sort_order);
CREATE INDEX IF NOT EXISTS idx_display_items_active ON display_items(is_active);
CREATE INDEX IF NOT EXISTS idx_display_items_key ON display_items(image_key);

-- 设置 RLS (Row Level Security) 策略
ALTER TABLE display_items ENABLE ROW LEVEL SECURITY;

-- 允许匿名读取
CREATE POLICY "Allow public read access" ON display_items
  FOR SELECT
  USING (true);

-- 允许匿名插入
CREATE POLICY "Allow public insert access" ON display_items
  FOR INSERT
  WITH CHECK (true);

-- 允许匿名更新
CREATE POLICY "Allow public update access" ON display_items
  FOR UPDATE
  USING (true);

-- 允许匿名删除
CREATE POLICY "Allow public delete access" ON display_items
  FOR DELETE
  USING (true);

-- =====================================================
-- 2. 插入初始数据（从现有配置迁移）
-- =====================================================

-- 设备数据
INSERT INTO display_items (category, sort_order, title_zh, title_en, title_ja, description_zh, description_en, description_ja, image_key, specs, tags, is_active)
VALUES
  ('equipment', 1, '五轴联动加工中心', '5-Axis CNC Machining Center', '5軸連動加工センター', '高精度五轴联动数控加工中心，可加工复杂曲面零件，适用于航空航天、模具等精密零部件加工。', 'High-precision 5-axis CNC machining center for complex surface parts, suitable for aerospace, molds and other precision components.', '高精度5軸連動NC加工センター。複雑な曲面の部品の加工に対応し、航空宇宙、金型などの精密部品に適用。', 'equip-cnc1', 
   '[{"label":"精度","value":"±0.003mm"},{"label":"联动","value":"五轴联动"},{"label":"主轴","value":"高速主轴"}]'::jsonb,
   '["数控机床"]'::jsonb, true),
  
  ('equipment', 2, '数控车削加工中心', 'CNC Turning Center', 'NC旋盤加工センター', '精密数控车削中心，配备自动换刀系统，适合回转体零件的高效精密加工，加工范围广泛。', 'Precision CNC turning center with automatic tool changer, suitable for efficient precision machining of rotary parts.', '精密NC旋盤加工センター。自動工具交換システム装備。回转体部品の高效的精密加工に適し、加工範囲が広い。', 'equip-cnc2',
   '[{"label":"换刀","value":"自动换刀"},{"label":"精度","value":"高精度"},{"label":"自动化","value":"全自动化"}]'::jsonb,
   '["数控机床"]'::jsonb, true),
  
  ('equipment', 3, '卧式加工中心', 'Horizontal Machining Center', '横型加工センター', '大型卧式加工中心，工作台尺寸800×800mm，具有高刚性、高效率特点，适用于箱体类零件加工。', 'Large horizontal machining center with 800×800mm worktable, high rigidity and efficiency, suitable for box-type parts.', '大型横型加工センター。工作台サイズ800×800mm。高剛性・高効率の特徴を持ち、箱体類部品の加工に適する。', 'equip-cnc3',
   '[{"label":"工作台","value":"800×800mm"},{"label":"刚性","value":"高刚性"},{"label":"适用","value":"大型零件"}]'::jsonb,
   '["数控机床"]'::jsonb, true),
  
  ('equipment', 4, '慢走丝线切割机床', 'Slow Wire EDM', '低速ワイヤーカット放電加工機', '高精度慢走丝电火花线切割机床，切割精度可达±0.002mm，表面粗糙度Ra≤0.4μm，适合精密模具加工。', 'High-precision slow wire EDM with cutting accuracy ±0.002mm, surface roughness Ra≤0.4μm, suitable for precision mold machining.', '高精度低速ワイヤーカット放電加工機。切割精度±0.002mm、表面粗さRa≤0.4μmに達し、精密金型加工に適する。', 'equip-wire1',
   '[{"label":"精度","value":"±0.002mm"},{"label":"粗糙度","value":"Ra≤0.4μm"},{"label":"类型","value":"精密切割"}]'::jsonb,
   '["线切割"]'::jsonb, true),
  
  ('equipment', 5, '快走丝线切割机床', 'Fast Wire EDM', '高速ワイヤーカット放電加工機', '高效快走丝线切割机床，适用于大批量零件加工，切割速度快、效率高，加工成本低，经济实用。', 'High-efficiency fast wire EDM for batch parts machining, fast cutting speed, high efficiency, low cost.', '高効率高速ワイヤーカット放電加工機。大量部品加工に適し、切割速度快く、効率が高く、加工コストが低い。', 'equip-wire2',
   '[{"label":"速度","value":"高速切割"},{"label":"批量","value":"大批量"},{"label":"经济性","value":"经济高效"}]'::jsonb,
   '["线切割"]'::jsonb, true),
  
  ('equipment', 6, '电火花成形机', 'EDM Sinking Machine', '形造放電加工機', '精密电火花成形加工机，可加工硬质合金、热处理钢等硬质材料，适合复杂型腔及细小孔加工。', 'Precision EDM sinking machine for hard materials like cemented carbide and hardened steel, suitable for complex cavities and small holes.', '精密形造放電加工機。超硬合金、熱処理鋼などの硬質材料の加工が可能。複雑なキャビティや細小穴の加工に適する。', 'equip-edm1',
   '[{"label":"材料","value":"硬质材料"},{"label":"型腔","value":"复杂型腔"},{"label":"工艺","value":"精密放电"}]'::jsonb,
   '["其他设备"]'::jsonb, true);

-- 产品数据
INSERT INTO display_items (category, sort_order, title_zh, title_en, title_ja, description_zh, description_en, description_ja, image_key, specs, tags, is_active)
VALUES
  ('product', 1, '精密齿轮', 'Precision Gear', '精密歯車', '高精度齿轮加工，材质可选45#钢或合金钢，适用于传动系统。', 'High-precision gear machining, available in 45# steel or alloy steel, suitable for transmission systems.', '高精度歯車加工。45#鋼または合金鋼を選択可能。伝動システムに適用。', 'prod-1',
   '[{"label":"材质","value":"45#钢 / 合金钢"}]'::jsonb,
   '["齿轮"]'::jsonb, true),
  
  ('product', 2, '异形轴类零件', 'Special Shaft Parts', '異形軸部品', '复杂异形轴类零件精密加工，支持不锈钢和铝合金材质。', 'Precision machining of complex special shaft parts, supporting stainless steel and aluminum alloy materials.', '複雑な異形軸部品の精密加工。ステンレス鋼とアルミ合金材質に対応。', 'prod-2',
   '[{"label":"材质","value":"不锈钢 / 铝合金"}]'::jsonb,
   '["轴类"]'::jsonb, true),
  
  ('product', 3, '精密模具零件', 'Precision Mold Parts', '精密金型部品', '高精度模具零件加工，采用P20/H13模具钢，确保使用寿命。', 'High-precision mold parts machining using P20/H13 mold steel to ensure service life.', '高精度金型部品加工。P20/H13金型鋼を採用し、使用寿命を確保。', 'prod-3',
   '[{"label":"材质","value":"P20 / H13 模具钢"}]'::jsonb,
   '["模具"]'::jsonb, true),
  
  ('product', 4, '结构件总成', 'Structural Assembly', '構造部品組立', '大型结构件总成加工，支持铸铁和碳钢材质，适用于重型机械。', 'Large structural assembly machining, supporting cast iron and carbon steel, suitable for heavy machinery.', '大型構造部品組立加工。鋳鉄と炭素鋼に対応。重型機械に適用。', 'prod-4',
   '[{"label":"材质","value":"铸铁 / 碳钢"}]'::jsonb,
   '["结构件"]'::jsonb, true),
  
  ('product', 5, '精密法兰盘', 'Precision Flange', '精密フランジ', '304不锈钢精密法兰盘加工，高精度密封面，适用于管道连接。', '304 stainless steel precision flange machining, high-precision sealing surface, suitable for pipe connections.', '304ステンレス鋼精密フランジ加工。高精度密封面。配管接続に適用。', 'prod-5',
   '[{"label":"材质","value":"304不锈钢"}]'::jsonb,
   '["法兰"]'::jsonb, true),
  
  ('product', 6, '铝合金壳体', 'Aluminum Alloy Housing', 'アルミ合金筐体', '6061/7075铝合金壳体加工，重量轻、强度高，适用于电子设备。', '6061/7075 aluminum alloy housing machining, lightweight and high strength, suitable for electronic equipment.', '6061/7075アルミ合金筐体加工。軽量・高強度。電子機器に適用。', 'prod-6',
   '[{"label":"材质","value":"6061 / 7075铝合金"}]'::jsonb,
   '["壳体"]'::jsonb, true),
  
  ('product', 7, '连接器支架', 'Connector Bracket', 'コネクタブラケット', '铝合金/不锈钢连接器支架，精密加工确保配合精度。', 'Aluminum alloy/stainless steel connector bracket, precision machining ensures fit accuracy.', 'アルミ合金/ステンレス鋼コネクタブラケット。精密加工で嵌合精度を確保。', 'prod-7',
   '[{"label":"材质","value":"铝合金 / 不锈钢"}]'::jsonb,
   '["支架"]'::jsonb, true),
  
  ('product', 8, '精密键槽零件', 'Precision Keyway Parts', '精密キー溝部品', '合金钢/工具钢精密键槽加工，高精度配合，适用于传动系统。', 'Alloy steel/tool steel precision keyway machining, high-precision fit, suitable for transmission systems.', '合金鋼/工具鋼精密キー溝加工。高精度嵌合。伝動システムに適用。', 'prod-8',
   '[{"label":"材质","value":"合金钢 / 工具钢"}]'::jsonb,
   '["键槽"]'::jsonb, true);

-- =====================================================
-- 3. 验证数据
-- =====================================================

-- 查询设备数量
SELECT COUNT(*) as equipment_count FROM display_items WHERE category = 'equipment';

-- 查询产品数量
SELECT COUNT(*) as product_count FROM display_items WHERE category = 'product';

-- 查看所有数据
SELECT id, category, sort_order, title_zh, image_key, is_active 
FROM display_items 
ORDER BY category, sort_order;

-- =====================================================
-- 执行完毕后验证：
-- 1. display_items 表已创建
-- 2. 6个设备和8个产品已插入
-- 3. RLS 策略已配置
-- 4. 索引已创建
-- =====================================================
