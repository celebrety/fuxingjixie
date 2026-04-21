/* ---------- Web 版脚本 开始 ---------- */

// ===== 多语言配置 =====
const langData = {
    zh: {
        "phone": "电话: 028-XXXX-XXXX",
        "address-short": "成都市青白江区",
        "hours": "工作时间: 周一至周六 8:00-18:00",
        "company-name": "成都市青白江区复兴机械厂",
        "company-slogan": "FUXING MACHINERY FACTORY · CHENGDU",
        "nav-home": "首页",
        "nav-about": "关于我们",
        "nav-equipment": "设备中心",
        "nav-products": "产品展示",
        "nav-process": "工艺流程",
        "nav-message": "联系我们",
        "nav-quote": "获取报价",
        "hero-badge": "专业机械加工 · 精密制造专家",
        "hero-title-1": "精密制造",
        "hero-title-2": "成就品质未来",
        "hero-subtitle": "PRECISION MANUFACTURING · QUALITY FIRST",
        "hero-desc": "成都市青白江区复兴机械厂，专注精密机械加工二十余年，拥有先进数控机床、线切割等设备，为客户提供高精度、高质量的机械加工解决方案。",
        "hero-btn1": "🔧 查看产品",
        "hero-btn2": "📩 联系我们",
        "stat1": "年行业经验",
        "stat2": "服务客户",
        "stat3": "先进设备",
        "stat4": "客户满意度",
        "features-tag": "核心优势",
        "features-title": "为什么选择复兴机械厂",
        "features-desc": "二十余年深耕精密机械加工领域，我们以技术、品质、服务赢得客户信赖",
        "feat1-title": "先进设备",
        "feat1-desc": "引进国内外先进数控加工中心、精密线切割、电火花等设备，加工精度达微米级",
        "feat2-title": "精密加工",
        "feat2-desc": "严格的质量管理体系，精密加工公差控制在±0.005mm，满足各类高精度要求",
        "feat3-title": "资深团队",
        "feat3-desc": "拥有丰富经验的工程师和技师团队，持有国家相关职业资格证书，技艺精湛",
        "feat4-title": "快速交货",
        "feat4-desc": "科学的生产调度管理，保证按时交货，支持紧急订单加急处理，响应迅速",
        "about-tag": "关于我们",
        "about-title": "成都市青白江区复兴机械厂",
        "about-intro": "成都市青白江区复兴机械厂成立于2000年代初，坐落于成都市青白江区工业园区，是一家专业从事精密机械加工的制造企业。二十余年来，我们始终坚持'精益求精、诚信为本'的经营理念，为航空、汽车、电子、能源等多个行业提供高品质的机械加工服务。",
        "about-li1": "厂区面积约5000平方米，拥有现代化车间及精密检测室",
        "about-li2": "引进日本、德国等进口数控设备30余台套，设备精良",
        "about-li3": "专业技术人员60余名，其中高级技师15名，工程师10名",
        "about-li4": "通过ISO 9001质量管理体系认证，严格把控产品质量",
        "about-li5": "年产值超过3000万元，服务客户遍及全国各地及海外",
        "about-btn": "了解更多 →",
        "about-years": "年专业经验",
        "about-cert": "ISO 9001 认证",
        "equip-tag": "设备中心",
        "equip-title": "先进加工设备",
        "equip-desc": "引进国内外一流数控加工设备，全面保障产品加工精度与质量",
        "filter-all": "全部设备",
        "filter-cnc": "数控机床",
        "filter-wire": "线切割",
        "filter-other": "其他设备",
        "tag-cnc": "数控机床",
        "tag-wire": "线切割",
        "tag-other": "其他",
        "equip1-name": "五轴联动加工中心",
        "equip1-desc": "高精度五轴联动数控加工中心，可加工复杂曲面零件，适用于航空航天、模具等精密零部件加工。",
        "equip2-name": "数控车削加工中心",
        "equip2-desc": "精密数控车削中心，配备自动换刀系统，适合回转体零件的高效精密加工，加工范围广泛。",
        "equip3-name": "卧式加工中心",
        "equip3-desc": "大型卧式加工中心，工作台尺寸800×800mm，具有高刚性、高效率特点，适用于箱体类零件加工。",
        "equip4-name": "慢走丝线切割机床",
        "equip4-desc": "高精度慢走丝电火花线切割机床，切割精度可达±0.002mm，表面粗糙度Ra≤0.4μm，适合精密模具加工。",
        "equip5-name": "快走丝线切割机床",
        "equip5-desc": "高效快走丝线切割机床，适用于大批量零件加工，切割速度快、效率高，加工成本低，经济实用。",
        "equip6-name": "电火花成形机",
        "equip6-desc": "精密电火花成形加工机，可加工硬质合金、热处理钢等硬质材料，适合复杂型腔及细小孔加工。",
        "prod-tag": "产品展示",
        "prod-title": "精密加工产品",
        "prod-desc": "我们为各行业提供高精度、高质量的机械加工成品，从零件到总成，满足您的一切需求",
        "view-detail": "查看详情",
        "prod1-name": "精密齿轮",
        "prod1-mat": "材质：45#钢 / 合金钢",
        "prod2-name": "异形轴类零件",
        "prod2-mat": "材质：不锈钢 / 铝合金",
        "prod3-name": "精密模具零件",
        "prod3-mat": "材质：P20 / H13 模具钢",
        "prod4-name": "结构件总成",
        "prod4-mat": "材质：铸铁 / 碳钢",
        "prod5-name": "精密法兰盘",
        "prod5-mat": "材质：304不锈钢",
        "prod6-name": "铝合金壳体",
        "prod6-mat": "材质：6061 / 7075铝合金",
        "prod7-name": "连接器支架",
        "prod7-mat": "材质：铝合金 / 不锈钢",
        "prod8-name": "精密键槽零件",
        "prod8-mat": "材质：合金钢 / 工具钢",
        "proc-tag": "生产流程",
        "proc-title": "标准化工艺流程",
        "proc-desc": "严格执行标准化生产流程，确保每道工序质量可控",
        "step1": "需求评审",
        "step1-desc": "技术团队评审客户图纸、材料及精度要求",
        "step2": "编程设计",
        "step2-desc": "CAD/CAM软件辅助工艺设计与程序编制",
        "step3": "精密加工",
        "step3-desc": "数控设备精密加工，过程实时监控",
        "step4": "质量检测",
        "step4-desc": "三坐标测量仪全尺寸检测，出具检测报告",
        "step5": "包装交货",
        "step5-desc": "防锈包装处理，安全准时送达客户",
        "cert-tag": "资质认证",
        "cert-title": "荣誉资质",
        "cert-desc": "多项权威认证，是我们品质实力的最好证明",
        "cert1": "ISO 9001:2015",
        "cert1-desc": "质量管理体系认证，严格把控生产各环节质量",
        "cert2": "ISO 14001",
        "cert2-desc": "环境管理体系认证，绿色环保生产理念",
        "cert3": "高新技术企业",
        "cert3-desc": "国家认定高新技术企业，持续创新研发能力",
        "cert4": "AAA信用企业",
        "cert4-desc": "中国企业信用评级AAA级，诚信经营典范",
        "msg-tag": "在线留言",
        "msg-title": "联系我们",
        "msg-desc": "欢迎留言询价，我们将在24小时内回复您的咨询",
        "contact-title": "随时与我们联系",
        "contact-desc": "无论是产品咨询、技术交流还是合作洽谈，我们专业的客服团队随时为您服务，欢迎来厂参观指导。",
        "ci-addr": "工厂地址",
        "ci-addr-val": "四川省成都市青白江区工业园区XXX路XX号",
        "ci-phone": "联系电话",
        "ci-email": "电子邮箱",
        "ci-hours": "工作时间",
        "ci-hours-val": "周一至周六 08:00 - 18:00",
        "ci-wechat": "微信/QQ",
        "form-title": "📝 在线留言",
        "form-success": "留言提交成功！我们将在24小时内与您联系，感谢您的信任。",
        "form-name": "您的姓名",
        "form-phone": "联系电话",
        "form-company": "公司名称",
        "form-email": "电子邮箱",
        "form-type": "咨询类型",
        "form-select": "-- 请选择咨询类型 --",
        "form-opt1": "产品询价",
        "form-opt2": "技术咨询",
        "form-opt3": "合作洽谈",
        "form-opt4": "其他事项",
        "form-content": "留言内容",
        "form-submit": "立即提交留言",
        "review-tag": "客户评价",
        "review-title": "客户反馈",
        "partner-tag": "合作伙伴",
        "partner-title": "携手共赢",
        "footer-desc": "专注精密机械加工二十余年，以精湛工艺和可靠品质赢得客户信赖。我们致力于为客户提供最优质的机械加工解决方案。",
        "footer-links": "快速导航",
        "footer-services": "加工服务",
        "footer-contact": "联系方式",
        "serv1": "数控车削",
        "serv2": "数控铣削",
        "serv3": "线切割加工",
        "serv4": "电火花加工",
        "serv5": "磨削加工",
        "serv6": "精密检测",
        "footer-copy": "© 2024 成都市青白江区复兴机械厂 版权所有",
        "footer-privacy": "隐私政策",
        "footer-terms": "使用条款",
        "footer-icp": "蜀ICP备XXXXXX号",
        "review1-name": "张经理",
        "review1-company": "成都某汽车零部件公司",
        "review1-text": "合作两年多了，复兴机械的加工精度和交货期都非常可靠。特别是精密齿轮加工，尺寸精度完全满足我们的要求，是值得长期合作的供应商！",
        "review2-name": "李工程师",
        "review2-company": "北京某航空设备公司",
        "review2-text": "我们有一批航空铝合金零件需要加工，公差要求非常严格。复兴机械认真负责，最终交付的产品完全合格，服务态度也很好，强烈推荐！",
        "review3-name": "王总",
        "review3-company": "重庆某机械设备公司",
        "review3-text": "线切割加工的精度很高，模具零件一次合格，节省了很多返工时间和成本。价格也比较合理，整体性价比很高，值得推荐。",
        "partner1": "中航工业",
        "partner2": "比亚迪汽车",
        "partner3": "国家电网",
        "partner4": "华为技术",
        "partner5": "东方电气",
        "partner6": "中国航天",
        "partner7": "三一重工",
        "partner8": "四川医械",
        "partner9": "中建集团",
        "partner10": "中石化",
        "equip-spec-auto-tool": "自动换刀",
        "equip-spec-high-prec": "高精度",
        "equip-spec-auto": "全自动化",
        "equip-spec-800": "800×800工作台",
        "equip-spec-rigid": "高刚性",
        "equip-spec-large": "大型零件",
        "equip-spec-002": "±0.002mm",
        "equip-spec-ra04": "Ra≤0.4μm",
        "equip-spec-prec-cut": "精密切割",
        "equip-spec-high-speed": "高速切割",
        "equip-spec-batch": "大批量",
        "equip-spec-economy": "经济高效",
        "equip-spec-hard": "硬质材料",
        "equip-spec-cavity": "复杂型腔",
        "equip-spec-edm": "精密放电",
        "admin-entry": "管理"
    },
    en: {
        "phone": "Tel: 028-XXXX-XXXX",
        "address-short": "Qingbaijiang District, Chengdu",
        "hours": "Working Hours: Mon-Sat 8:00-18:00",
        "company-name": "Fuxing Machinery Factory, Qingbaijiang, Chengdu",
        "company-slogan": "FUXING MACHINERY FACTORY · CHENGDU",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-equipment": "Equipment",
        "nav-products": "Products",
        "nav-process": "Process",
        "nav-message": "Contact",
        "nav-quote": "Get Quote",
        "hero-badge": "Professional Machining · Precision Manufacturing Expert",
        "hero-title-1": "Precision Manufacturing",
        "hero-title-2": "Quality for the Future",
        "hero-subtitle": "PRECISION MANUFACTURING · QUALITY FIRST",
        "hero-desc": "Fuxing Machinery Factory has been dedicated to precision mechanical processing for over 20 years, equipped with advanced CNC machines, wire cutting equipment, providing high-precision, high-quality machining solutions.",
        "hero-btn1": "🔧 Our Products",
        "hero-btn2": "📩 Contact Us",
        "stat1": "Years Experience",
        "stat2": "Customers Served",
        "stat3": "Advanced Equipment",
        "stat4": "Customer Satisfaction",
        "features-tag": "Core Advantages",
        "features-title": "Why Choose Fuxing Machinery",
        "features-desc": "Over 20 years in precision machining, we earn trust through technology, quality and service",
        "feat1-title": "Advanced Equipment",
        "feat1-desc": "Imported CNC machining centers, precision wire cutting, EDM and other equipment with micron-level precision",
        "feat2-title": "Precision Machining",
        "feat2-desc": "Strict quality management system, precision tolerance controlled within ±0.005mm for high-precision requirements",
        "feat3-title": "Experienced Team",
        "feat3-desc": "Experienced engineers and technicians holding national vocational qualification certificates",
        "feat4-title": "Fast Delivery",
        "feat4-desc": "Scientific production scheduling ensures on-time delivery, supporting rush orders with rapid response",
        "about-tag": "About Us",
        "about-title": "Fuxing Machinery Factory, Chengdu",
        "about-intro": "Fuxing Machinery Factory was established in the early 2000s, located in Qingbaijiang Industrial Park, Chengdu. For over 20 years, we have adhered to 'excellence and integrity', providing high-quality machining services for aviation, automotive, electronics, energy and other industries.",
        "about-li1": "Factory area of about 5,000 sqm with modern workshops and precision inspection rooms",
        "about-li2": "Imported CNC equipment from Japan, Germany and other countries, 30+ sets",
        "about-li3": "60+ professional technicians, including 15 senior technicians and 10 engineers",
        "about-li4": "ISO 9001 quality management system certified, strict quality control",
        "about-li5": "Annual output value exceeding 30 million yuan, serving customers nationwide and overseas",
        "about-btn": "Learn More →",
        "about-years": "Years Experience",
        "about-cert": "ISO 9001 Certified",
        "equip-tag": "Equipment Center",
        "equip-title": "Advanced Machining Equipment",
        "equip-desc": "Imported first-class CNC machining equipment to ensure product processing accuracy and quality",
        "filter-all": "All Equipment",
        "filter-cnc": "CNC Machines",
        "filter-wire": "Wire Cutting",
        "filter-other": "Others",
        "tag-cnc": "CNC Machine",
        "tag-wire": "Wire Cutting",
        "tag-other": "Others",
        "equip1-name": "5-Axis Machining Center",
        "equip1-desc": "High-precision 5-axis CNC machining center for complex surface parts, suitable for aerospace, mold and other precision components.",
        "equip2-name": "CNC Turning Center",
        "equip2-desc": "Precision CNC turning center with automatic tool change system for efficient precision machining of rotary parts.",
        "equip3-name": "Horizontal Machining Center",
        "equip3-desc": "Large horizontal machining center with 800×800mm table, high rigidity and efficiency for box-type parts machining.",
        "equip4-name": "Slow-Feed Wire EDM",
        "equip4-desc": "High-precision slow-feed wire EDM with ±0.002mm cutting accuracy and Ra≤0.4μm, ideal for precision mold machining.",
        "equip5-name": "Fast-Feed Wire EDM",
        "equip5-desc": "Efficient fast-feed wire EDM for mass production, fast cutting speed, high efficiency, low cost.",
        "equip6-name": "EDM Forming Machine",
        "equip6-desc": "Precision EDM forming machine for hard materials, complex cavities and small hole machining.",
        "prod-tag": "Products",
        "prod-title": "Precision Machined Products",
        "prod-desc": "High-precision, high-quality machined products for various industries, from parts to assemblies",
        "view-detail": "View Details",
        "prod1-name": "Precision Gears",
        "prod1-mat": "Material: 45# Steel / Alloy Steel",
        "prod2-name": "Special Shaft Parts",
        "prod2-mat": "Material: Stainless Steel / Aluminum Alloy",
        "prod3-name": "Precision Mold Parts",
        "prod3-mat": "Material: P20 / H13 Mold Steel",
        "prod4-name": "Structural Assembly",
        "prod4-mat": "Material: Cast Iron / Carbon Steel",
        "prod5-name": "Precision Flanges",
        "prod5-mat": "Material: 304 Stainless Steel",
        "prod6-name": "Aluminum Alloy Housing",
        "prod6-mat": "Material: 6061 / 7075 Aluminum Alloy",
        "prod7-name": "Connector Brackets",
        "prod7-mat": "Material: Aluminum Alloy / Stainless Steel",
        "prod8-name": "Keyway Parts",
        "prod8-mat": "Material: Alloy Steel / Tool Steel",
        "proc-tag": "Production Process",
        "proc-title": "Standardized Process Flow",
        "proc-desc": "Strictly following standardized production processes to ensure quality control at every step",
        "step1": "Requirements Review",
        "step1-desc": "Technical team reviews customer drawings, materials and precision requirements",
        "step2": "Programming & Design",
        "step2-desc": "CAD/CAM software for process design and program preparation",
        "step3": "Precision Machining",
        "step3-desc": "CNC precision machining with real-time process monitoring",
        "step4": "Quality Inspection",
        "step4-desc": "Full-size inspection with CMM, providing inspection reports",
        "step5": "Packaging & Delivery",
        "step5-desc": "Anti-rust packaging, safe and on-time delivery to customers",
        "cert-tag": "Certifications",
        "cert-title": "Honors & Qualifications",
        "cert-desc": "Multiple authoritative certifications demonstrating our quality and capability",
        "cert1": "ISO 9001:2015",
        "cert1-desc": "Quality management system certification, strict quality control",
        "cert2": "ISO 14001",
        "cert2-desc": "Environmental management system certification, green production",
        "cert3": "High-Tech Enterprise",
        "cert3-desc": "State-recognized high-tech enterprise with continuous innovation",
        "cert4": "AAA Credit Enterprise",
        "cert4-desc": "AAA credit rating, model of integrity in business",
        "msg-tag": "Online Message",
        "msg-title": "Contact Us",
        "msg-desc": "Welcome to leave a message. We will reply within 24 hours.",
        "contact-title": "Get In Touch Anytime",
        "contact-desc": "Whether for product inquiry, technical exchange or business cooperation, our professional team is always ready to serve you.",
        "ci-addr": "Factory Address",
        "ci-addr-val": "No.XX, XXX Road, Qingbaijiang Industrial Park, Chengdu, Sichuan",
        "ci-phone": "Phone",
        "ci-email": "Email",
        "ci-hours": "Working Hours",
        "ci-hours-val": "Mon-Sat: 08:00 - 18:00",
        "ci-wechat": "WeChat/QQ",
        "form-title": "📝 Online Message",
        "form-success": "Message submitted successfully! We will contact you within 24 hours. Thank you for your trust.",
        "form-name": "Your Name",
        "form-phone": "Phone Number",
        "form-company": "Company Name",
        "form-email": "Email Address",
        "form-type": "Inquiry Type",
        "form-select": "-- Select inquiry type --",
        "form-opt1": "Product Inquiry",
        "form-opt2": "Technical Consultation",
        "form-opt3": "Business Cooperation",
        "form-opt4": "Other",
        "form-content": "Message Content",
        "form-submit": "Submit Message",
        "review-tag": "Customer Reviews",
        "review-title": "Customer Feedback",
        "partner-tag": "Partners",
        "partner-title": "Win Together",
        "footer-desc": "Over 20 years in precision machining, winning trust with craftsmanship and reliability. Committed to providing the best machining solutions.",
        "footer-links": "Quick Links",
        "footer-services": "Services",
        "footer-contact": "Contact Info",
        "serv1": "CNC Turning",
        "serv2": "CNC Milling",
        "serv3": "Wire Cutting",
        "serv4": "EDM Machining",
        "serv5": "Grinding",
        "serv6": "Precision Inspection",
        "footer-copy": "© 2024 Fuxing Machinery Factory, Chengdu. All Rights Reserved.",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Use",
        "footer-icp": "Shu ICP No.XXXXXX",
        "review1-name": "Manager Zhang",
        "review1-company": "Chengdu Auto Parts Co.",
        "review1-text": "We've been working together for over 2 years. Fuxing Machinery's machining accuracy and delivery are very reliable. The precision gear machining fully meets our requirements. A trustworthy long-term supplier!",
        "review2-name": "Engineer Li",
        "review2-company": "Beijing Aviation Equipment Co.",
        "review2-text": "We had a batch of aerospace aluminum parts with very strict tolerance requirements. Fuxing Machinery was responsible and the final products were fully qualified. Highly recommended!",
        "review3-name": "Director Wang",
        "review3-company": "Chongqing Machinery Co.",
        "review3-text": "The wire cutting accuracy is very high, mold parts passed on the first try, saving rework time and cost. Reasonable pricing, great value for money. Recommended.",
        "partner1": "AVIC",
        "partner2": "BYD Auto",
        "partner3": "State Grid",
        "partner4": "Huawei Tech",
        "partner5": "Dongfang Electric",
        "partner6": "CASC",
        "partner7": "SANY Heavy Industry",
        "partner8": "Sichuan Medical Devices",
        "partner9": "CSCEC",
        "partner10": "Sinopec",
        "equip-spec-auto-tool": "Auto Tool Change",
        "equip-spec-high-prec": "High Precision",
        "equip-spec-auto": "Full Automation",
        "equip-spec-800": "800×800 Table",
        "equip-spec-rigid": "High Rigidity",
        "equip-spec-large": "Large Parts",
        "equip-spec-002": "±0.002mm",
        "equip-spec-ra04": "Ra≤0.4μm",
        "equip-spec-prec-cut": "Precision Cutting",
        "equip-spec-high-speed": "High Speed",
        "equip-spec-batch": "Mass Production",
        "equip-spec-economy": "Cost-Effective",
        "equip-spec-hard": "Hard Materials",
        "equip-spec-cavity": "Complex Cavities",
        "equip-spec-edm": "Precision EDM",
        "admin-entry": "Admin"
    },
    ja: {
        "phone": "電話: 028-XXXX-XXXX",
        "address-short": "成都市青白江区",
        "hours": "営業時間: 月〜土 8:00-18:00",
        "company-name": "成都市青白江区復興機械工場",
        "company-slogan": "FUXING MACHINERY FACTORY · CHENGDU",
        "nav-home": "ホーム",
        "nav-about": "会社概要",
        "nav-equipment": "設備センター",
        "nav-products": "製品展示",
        "nav-process": "工程フロー",
        "nav-message": "お問い合わせ",
        "nav-quote": "見積依頼",
        "hero-badge": "精密機械加工のプロフェッショナル",
        "hero-title-1": "精密製造",
        "hero-title-2": "品質で未来を",
        "hero-subtitle": "PRECISION MANUFACTURING · QUALITY FIRST",
        "hero-desc": "成都市青白江区復興機械工場は20年以上にわたり精密機械加工に専念し、最先端のCNC工作機械、ワイヤーカット設備を擁し、高精度・高品質な加工ソリューションを提供しています。",
        "hero-btn1": "🔧 製品を見る",
        "hero-btn2": "📩 お問い合わせ",
        "stat1": "年の実績",
        "stat2": "お客様",
        "stat3": "先進設備",
        "stat4": "顧客満足度",
        "features-tag": "主な強み",
        "features-title": "なぜ復興機械工場を選ぶのか",
        "features-desc": "20年以上の精密機械加工のノウハウで、技術・品質・サービスで信頼を獲得",
        "feat1-title": "先進設備",
        "feat1-desc": "国内外の最先端CNC加工センター、精密ワイヤーカット、放電加工機を導入、ミクロン精度を実現",
        "feat2-title": "精密加工",
        "feat2-desc": "厳格な品質管理システム、公差±0.005mm以内を実現、高精度要求に対応",
        "feat3-title": "熟練チーム",
        "feat3-desc": "豊富な経験を持つエンジニアと技師チーム、国家資格保有者が品質を保証",
        "feat4-title": "迅速納品",
        "feat4-desc": "科学的な生産管理で納期厳守、緊急オーダーにも迅速対応",
        "about-tag": "会社概要",
        "about-title": "成都市青白江区復興機械工場",
        "about-intro": "復興機械工場は2000年代初頭に創業し、成都市青白江区工業団地に位置する精密機械加工専門メーカーです。20年以上にわたり「精益求精、誠信为本」の理念を堅持し、航空、自動車、電子、エネルギーなど各分野に高品質な加工サービスを提供してきました。",
        "about-li1": "工場面積約5,000㎡、近代的な工房と精密検査室を完備",
        "about-li2": "日本・ドイツ等から輸入したCNC設備30台以上を導入",
        "about-li3": "専門技術者60名以上、うち上級技師15名、エンジニア10名",
        "about-li4": "ISO 9001品質マネジメントシステム認証取得、品質管理を徹底",
        "about-li5": "年間生産額3,000万元超、全国および海外の顧客にサービス提供",
        "about-btn": "詳細を見る →",
        "about-years": "年の実績",
        "about-cert": "ISO 9001 認証取得",
        "equip-tag": "設備センター",
        "equip-title": "最先端加工設備",
        "equip-desc": "国内外一流のCNC加工設備を導入、製品精度と品質を全面保証",
        "filter-all": "全設備",
        "filter-cnc": "CNC工作機械",
        "filter-wire": "ワイヤーカット",
        "filter-other": "その他",
        "tag-cnc": "CNC工作機械",
        "tag-wire": "ワイヤーカット",
        "tag-other": "その他",
        "equip1-name": "5軸加工センター",
        "equip1-desc": "高精度5軸CNC加工センター、複雑曲面部品の加工が可能、航空宇宙・金型等の精密部品加工に適応。",
        "equip2-name": "CNC旋削加工センター",
        "equip2-desc": "精密CNC旋削センター、自動工具交換システム搭載、回転体部品の高効率精密加工に対応。",
        "equip3-name": "横型加工センター",
        "equip3-desc": "大型横型加工センター、テーブルサイズ800×800mm、高剛性・高効率、箱型部品加工に最適。",
        "equip4-name": "ワイヤー放電加工機（細線）",
        "equip4-desc": "高精度細線ワイヤー放電加工機、切断精度±0.002mm、表面粗さRa≤0.4μm、精密金型加工に最適。",
        "equip5-name": "ワイヤー放電加工機（高速）",
        "equip5-desc": "高効率高速ワイヤー放電加工機、大量生産に対応、高速切断・高効率・低コスト。",
        "equip6-name": "放電成形加工機",
        "equip6-desc": "精密放電成形加工機、超硬合金・熱処理鋼等の硬質材料加工、複雑キャビティ・細孔加工に対応。",
        "prod-tag": "製品展示",
        "prod-title": "精密加工製品",
        "prod-desc": "各種業界向けに高精度・高品質な機械加工製品を提供、部品からアセンブリまで対応",
        "view-detail": "詳細を見る",
        "prod1-name": "精密歯車",
        "prod1-mat": "材質：45#鋼 / 合金鋼",
        "prod2-name": "異形軸部品",
        "prod2-mat": "材質：ステンレス / アルミ合金",
        "prod3-name": "精密金型部品",
        "prod3-mat": "材質：P20 / H13 金型鋼",
        "prod4-name": "構造体アセンブリ",
        "prod4-mat": "材質：鋳鉄 / 炭素鋼",
        "prod5-name": "精密フランジ",
        "prod5-mat": "材質：304ステンレス",
        "prod6-name": "アルミ合金ハウジング",
        "prod6-mat": "材質：6061 / 7075アルミ合金",
        "prod7-name": "コネクタブラケット",
        "prod7-mat": "材質：アルミ合金 / ステンレス",
        "prod8-name": "精密キー溝部品",
        "prod8-mat": "材質：合金鋼 / 工具鋼",
        "proc-tag": "生産工程",
        "proc-title": "標準化工程フロー",
        "proc-desc": "標準化された生産フローを厳格に遵守し、各工程の品質管理を確保",
        "step1": "要件審査",
        "step1-desc": "技術チームが図面・材料・精度要求を審査",
        "step2": "プログラミング",
        "step2-desc": "CAD/CAMソフトで工程設計とプログラム作成",
        "step3": "精密加工",
        "step3-desc": "CNC設備による精密加工、リアルタイム監視",
        "step4": "品質検査",
        "step4-desc": "三次元測定機による全寸法検査、検査レポート発行",
        "step5": "梱包・出荷",
        "step5-desc": "防錆梱包処理、安全・時間通りにお届け",
        "cert-tag": "認証・資格",
        "cert-title": "栄誉・資格",
        "cert-desc": "複数の権威ある認証が品質と実力の証明",
        "cert1": "ISO 9001:2015",
        "cert1-desc": "品質マネジメントシステム認証、生産全工程の品質管理",
        "cert2": "ISO 14001",
        "cert2-desc": "環境マネジメントシステム認証、グリーン生産",
        "cert3": "ハイテク企業",
        "cert3-desc": "国家認定ハイテク企業、継続的な技術革新",
        "cert4": "AAAクレジット企業",
        "cert4-desc": "中国企業信用AAA評価、誠実な経営の模範",
        "msg-tag": "お問い合わせ",
        "msg-title": "お問い合わせ",
        "msg-desc": "お気軽にお問い合わせください。24時間以内にご返答いたします。",
        "contact-title": "いつでもご連絡ください",
        "contact-desc": "製品のお問い合わせ、技術相談、ビジネス協力など、専門スタッフが丁重にサポートいたします。",
        "ci-addr": "工場住所",
        "ci-addr-val": "四川省成都市青白江区工業団地XXX路XX号",
        "ci-phone": "電話番号",
        "ci-email": "メールアドレス",
        "ci-hours": "営業時間",
        "ci-hours-val": "月〜土: 08:00 - 18:00",
        "ci-wechat": "WeChat/QQ",
        "form-title": "📝 お問い合わせフォーム",
        "form-success": "送信完了！24時間以内にご連絡いたします。ご信頼ありがとうございます。",
        "form-name": "お名前",
        "form-phone": "電話番号",
        "form-company": "会社名",
        "form-email": "メールアドレス",
        "form-type": "お問い合わせ種別",
        "form-select": "-- 種別を選択してください --",
        "form-opt1": "製品見積",
        "form-opt2": "技術相談",
        "form-opt3": "ビジネス協力",
        "form-opt4": "その他",
        "form-content": "お問い合わせ内容",
        "form-submit": "送信する",
        "review-tag": "お客様の声",
        "review-title": "お客様からのフィードバック",
        "partner-tag": "パートナー",
        "partner-title": "共に成長",
        "footer-desc": "20年以上の精密機械加工の実績、卓越した技術と信頼性でお客様の信頼を獲得。最高の加工ソリューションを提供いたします。",
        "footer-links": "クイックリンク",
        "footer-services": "加工サービス",
        "footer-contact": "連絡先",
        "serv1": "CNC旋削",
        "serv2": "CNCフライス",
        "serv3": "ワイヤー放電加工",
        "serv4": "放電加工",
        "serv5": "研削加工",
        "serv6": "精密検査",
        "footer-copy": "© 2024 成都市青白江区復興機械工場 全著作権所有",
        "footer-privacy": "プライバシーポリシー",
        "footer-terms": "利用規約",
        "footer-icp": "蜀ICP備XXXXXX号",
        "review1-name": "張マネージャー",
        "review1-company": "成都某自動車部品会社",
        "review1-text": "2年以上の取引があり、復興機械の加工精度と納期は非常に信頼性が高いです。特に精密歯車加工は、寸法精度が当社の要件を完全に満たしており、長期的な取引先として信頼できます！",
        "review2-name": "李エンジニア",
        "review2-company": "北京某航空設備会社",
        "review2-text": "航空アルミ合金部品の加工で、公差要求が非常に厳しかったです。復興機械は真摯に対応し、最終製品は全て合格。サービス態度も良く、強くお勧めします！",
        "review3-name": "王社長",
        "review3-company": "重慶某機械設備会社",
        "review3-text": "ワイヤーカット加工の精度が高く、金型部品が一発合格。手直しの時間とコストを大幅に削減できました。価格も合理的で、コストパフォーマンスが高いです。",
        "partner1": "中国航空工業",
        "partner2": "BYD自動車",
        "partner3": "国家電網",
        "partner4": "ファーウェイ技術",
        "partner5": "東方電気",
        "partner6": "中国航天",
        "partner7": "三一重工",
        "partner8": "四川医療機器",
        "partner9": "中建集団",
        "partner10": "中国石化",
        "equip-spec-auto-tool": "自動工具交換",
        "equip-spec-high-prec": "高精度",
        "equip-spec-auto": "全自動",
        "equip-spec-800": "800×800テーブル",
        "equip-spec-rigid": "高剛性",
        "equip-spec-large": "大型部品",
        "equip-spec-002": "±0.002mm",
        "equip-spec-ra04": "Ra≤0.4μm",
        "equip-spec-prec-cut": "精密切断",
        "equip-spec-high-speed": "高速切断",
        "equip-spec-batch": "大量生産",
        "equip-spec-economy": "経済的",
        "equip-spec-hard": "硬質材料",
        "equip-spec-cavity": "複雑キャビティ",
        "equip-spec-edm": "精密放電",
        "admin-entry": "管理"
    }
};

let currentLang = 'zh';

// ===== 语言切换函数 =====
function switchLang(lang) {
    currentLang = lang;
    const data = langData[lang];
    if (!data) return;

    // 更新所有带data-lang属性的元素
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (data[key]) {
            el.textContent = data[key];
        }
    });

    // 更新表单占位符
    const placeholders = {
        zh: { name: '请输入姓名', phone: '请输入电话号码', company: '请输入公司名称', email: 'example@company.com', content: '请详细描述您的需求，包括产品规格、数量、材质要求等，以便我们提供准确报价...' },
        en: { name: 'Enter your name', phone: 'Enter phone number', company: 'Enter company name', email: 'example@company.com', content: 'Please describe your requirements in detail, including product specifications, quantity, material requirements...' },
        ja: { name: 'お名前を入力してください', phone: '電話番号を入力してください', company: '会社名を入力してください', email: 'example@company.com', content: 'ご要望の詳細（製品仕様、数量、材質要件など）をご記入ください...' }
    };

    const ph = placeholders[lang];
    if (ph) {
        const nameInput = document.getElementById('msgName');
        const phoneInput = document.getElementById('msgPhone');
        const companyInput = document.getElementById('msgCompany');
        const emailInput = document.getElementById('msgEmail');
        const contentInput = document.getElementById('msgContent');
        if (nameInput) nameInput.placeholder = ph.name;
        if (phoneInput) phoneInput.placeholder = ph.phone;
        if (companyInput) companyInput.placeholder = ph.company;
        if (emailInput) emailInput.placeholder = ph.email;
        if (contentInput) contentInput.placeholder = ph.content;
    }

    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('lang-' + lang);
    if (activeBtn) activeBtn.classList.add('active');

    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';

    // 更新加载文字
    const loaderText = document.getElementById('loaderText');
    const loadingTexts = { zh: '复兴机械厂 正在加载...', en: 'Fuxing Machinery Loading...', ja: '復興機械工場 読み込み中...' };
    if (loaderText) loaderText.textContent = loadingTexts[lang];
}

// ===== 导航菜单 =====
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('open');
}

// ===== 导航高亮 =====
function updateNavActive() {
    const sections = ['home', 'about', 'equipment', 'products', 'process', 'message'];
    const scrollPos = window.scrollY + 100;
    let current = 'home';

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
            current = id;
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ===== 滚动事件 =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // 导航栏阴影
    const navbar = document.getElementById('navbar');
    if (scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // 回到顶部按钮
    const backToTop = document.getElementById('backToTop');
    if (scrollY > 300) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');

    updateNavActive();
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 设备过滤 =====
function filterEquipment(category, tabEl) {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');

    const cards = document.querySelectorAll('#equipmentGrid .equipment-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
            card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== 设备详情模态框 =====
const equipModalData = {
    cnc1: {
        icon: '🤖',
        title: { zh: '五轴联动加工中心', en: '5-Axis Machining Center', ja: '5軸加工センター' },
        desc: { zh: '高精度五轴联动数控加工中心，适用于复杂曲面零件加工，广泛应用于航空航天、精密模具制造等领域。', en: 'High-precision 5-axis CNC machining center for complex surface parts, widely used in aerospace and precision mold manufacturing.', ja: '高精度5軸CNC加工センター、複雑曲面部品の加工に対応、航空宇宙・精密金型製造等に広く使用。' },
        specs: [
            { label: { zh: '加工精度', en: 'Accuracy', ja: '加工精度' }, value: '±0.003mm' },
            { label: { zh: '主轴转速', en: 'Spindle Speed', ja: '主軸回転数' }, value: '15,000 rpm' },
            { label: { zh: '工作台', en: 'Table Size', ja: 'テーブルサイズ' }, value: '600×500mm' },
            { label: { zh: '联动轴数', en: 'Axes', ja: '連動軸数' }, value: '5轴联动' },
            { label: { zh: '刀具数量', en: 'Tool Magazine', ja: '刃物数量' }, value: '24把刀库' }
        ]
    },
    cnc2: {
        icon: '⚙️',
        title: { zh: '数控车削加工中心', en: 'CNC Turning Center', ja: 'CNC旋削加工センター' },
        desc: { zh: '精密数控车削中心，配备全功能刀塔和自动换刀系统，可一次装夹完成车、铣、钻、攻丝等多种工序。', en: 'Precision CNC turning center with full-function turret for turning, milling, drilling, and tapping in one setup.', ja: '精密CNC旋削センター、フルファンクションタレット搭載、一度のセットアップで旋削・フライス・穴あけ・タップ加工が可能。' },
        specs: [
            { label: { zh: '加工精度', en: 'Accuracy', ja: '加工精度' }, value: '±0.005mm' },
            { label: { zh: '最大车削直径', en: 'Max Turn Dia.', ja: '最大旋削径' }, value: 'Ø320mm' },
            { label: { zh: '最大加工长度', en: 'Max Length', ja: '最大加工長' }, value: '500mm' },
            { label: { zh: '主轴转速', en: 'Spindle Speed', ja: '主軸回転数' }, value: '4,500 rpm' }
        ]
    },
    cnc3: {
        icon: '🔩',
        title: { zh: '卧式加工中心', en: 'Horizontal Machining Center', ja: '横型加工センター' },
        desc: { zh: '大型卧式加工中心，适合箱体、壳体类零件的多面加工，高刚性设计保证重切削时的稳定性。', en: 'Large horizontal machining center for multi-face machining of box and housing parts, high rigidity for heavy cutting.', ja: '大型横型加工センター、箱型・ハウジング部品の多面加工に対応、高剛性設計で重切削時の安定性を確保。' },
        specs: [
            { label: { zh: '工作台尺寸', en: 'Table Size', ja: 'テーブルサイズ' }, value: '800×800mm' },
            { label: { zh: 'X/Y/Z行程', en: 'X/Y/Z Travel', ja: 'X/Y/Z移動量' }, value: '800/700/600mm' },
            { label: { zh: '刀库容量', en: 'Tool Magazine', ja: 'ツールマガジン' }, value: '60把' },
            { label: { zh: '定位精度', en: 'Positioning Acc.', ja: '位置決め精度' }, value: '±0.005mm' }
        ]
    },
    wire1: {
        icon: '⚡',
        title: { zh: '慢走丝线切割机床', en: 'Slow-Feed Wire EDM', ja: 'ワイヤー放電加工機（細線）' },
        desc: { zh: '高精度慢走丝电火花线切割，采用进口日本FANUC控制系统，切割精度高，表面质量好，适用于精密模具、硬质合金等材料加工。', en: 'High-precision slow-feed wire EDM with Japanese FANUC control system, excellent cutting accuracy and surface quality for precision molds and hard materials.', ja: '高精度細線ワイヤー放電加工機、日本FANUC制御システム搭載、精密金型・超硬合金等の加工に最適。' },
        specs: [
            { label: { zh: '切割精度', en: 'Cutting Accuracy', ja: '切断精度' }, value: '±0.002mm' },
            { label: { zh: '表面粗糙度', en: 'Surface Roughness', ja: '表面粗さ' }, value: 'Ra≤0.4μm' },
            { label: { zh: '最大切割高度', en: 'Max Cutting Height', ja: '最大切断高さ' }, value: '300mm' },
            { label: { zh: '工作台行程', en: 'Table Travel', ja: 'テーブル移動量' }, value: '500×400mm' }
        ]
    },
    wire2: {
        icon: '🔌',
        title: { zh: '快走丝线切割机床', en: 'Fast-Feed Wire EDM', ja: 'ワイヤー放電加工機（高速）' },
        desc: { zh: '高速往复走丝电火花线切割，切割速度快、效率高，适合大批量零件加工，成本经济，是中等精度要求零件的理想选择。', en: 'Fast reciprocating wire EDM with high cutting speed and efficiency, ideal for mass production of medium-precision parts.', ja: '高速往復走り線ワイヤー放電加工機、高速切断・高効率、大量生産の中精度部品加工に最適。' },
        specs: [
            { label: { zh: '切割精度', en: 'Cutting Accuracy', ja: '切断精度' }, value: '±0.01mm' },
            { label: { zh: '切割速度', en: 'Cutting Speed', ja: '切断速度' }, value: '≥100mm²/min' },
            { label: { zh: '最大加工厚度', en: 'Max Thickness', ja: '最大加工厚さ' }, value: '400mm' },
            { label: { zh: '工作台行程', en: 'Table Travel', ja: 'テーブル移動量' }, value: '600×400mm' }
        ]
    },
    edm1: {
        icon: '🔥',
        title: { zh: '电火花成形机', en: 'EDM Forming Machine', ja: '放電成形加工機' },
        desc: { zh: '精密电火花成形加工，利用电蚀原理去除材料，可加工淬火钢、硬质合金等常规刀具无法切削的硬质材料，特别适合复杂型腔、深孔等加工。', en: 'Precision EDM forming machine using electrical erosion to machine hardened steel, carbides and other hard materials, ideal for complex cavities and deep holes.', ja: '精密放電成形加工機、電食原理で焼入鋼・超硬合金等の硬質材料を加工、複雑キャビティ・深穴加工に最適。' },
        specs: [
            { label: { zh: '加工精度', en: 'Machining Accuracy', ja: '加工精度' }, value: '±0.01mm' },
            { label: { zh: '表面粗糙度', en: 'Surface Roughness', ja: '表面粗さ' }, value: 'Ra≤0.8μm' },
            { label: { zh: '工作台面积', en: 'Table Area', ja: 'テーブル面積' }, value: '700×500mm' },
            { label: { zh: '最大工件重量', en: 'Max Workpiece Weight', ja: '最大ワーク重量' }, value: '1000kg' }
        ]
    }
};

// 获取云端图片URL
function getCloudImageUrl(imageId) {
    try {
        const imgs = JSON.parse(localStorage.getItem('fx_images') || '{}');
        return imgs[imageId] || null;
    } catch(e) {
        return null;
    }
}

// 设备ID到云端图片ID的映射
const equipImageMapping = {
    cnc1: 'equip-cnc1', cnc2: 'equip-cnc2', cnc3: 'equip-cnc3',
    wire1: 'equip-wire1', wire2: 'equip-wire2', edm1: 'equip-edm1'
};

// 产品ID到云端图片ID的映射
const productImageMapping = {
    p1: 'prod-1', p2: 'prod-2', p3: 'prod-3', p4: 'prod-4',
    p5: 'prod-5', p6: 'prod-6', p7: 'prod-7', p8: 'prod-8'
};

window.openEquipModal = function(id) {
    const data = equipModalData[id];
    if (!data) return;
    const lang = currentLang;
    let specsHtml = '';
    data.specs.forEach(spec => {
        specsHtml += `<div class="modal-spec-row">
            <strong>${spec.label[lang] || spec.label.zh}</strong>
            <span>${spec.value}</span>
        </div>`;
    });
    // 尝试加载云端图片
    const cloudImgId = equipImageMapping[id];
    const cloudImgUrl = cloudImgId ? getCloudImageUrl(cloudImgId) : null;
    let imgHtml = '';
    if (cloudImgUrl) {
        imgHtml = `<div class="modal-image" style="width:100%;height:180px;border-radius:12px;overflow:hidden;margin-bottom:16px">
            <img src="${cloudImgUrl}" style="width:100%;height:100%;object-fit:cover" alt="${data.title[lang] || data.title.zh}" onerror="this.parentElement.style.display='none';this.parentElement.nextElementSibling.style.display='flex'">
        </div>
        <div class="modal-icon" style="display:none">${data.icon}</div>`;
    } else {
        imgHtml = `<div class="modal-icon">${data.icon}</div>`;
    }
    document.getElementById('modalContent').innerHTML = `
        ${imgHtml}
        <div class="modal-title">${data.title[lang] || data.title.zh}</div>
        <div class="modal-desc">${data.desc[lang] || data.desc.zh}</div>
        <div class="modal-specs">${specsHtml}</div>
        <a href="#message" class="btn-primary" style="width:100%;justify-content:center;text-decoration:none" onclick="closeModalBtn()" data-lang="nav-quote">获取报价</a>
    `;
    document.getElementById('modalOverlay').classList.add('active');
}

// ===== 产品详情模态框 =====
const productModalData = {
    p1: { icon: '⚙️', title: { zh: '精密齿轮', en: 'Precision Gears', ja: '精密歯車' }, desc: { zh: '采用高品质合金钢精密制造，齿形精度达DIN 5级，适用于减速器、变速箱等传动机构。可根据客户图纸定制各类标准及非标准齿轮。', en: 'High-quality alloy steel precision gears with DIN Class 5 tooth profile accuracy, suitable for reducers and transmissions. Custom standard and non-standard gears available.', ja: '高品質合金鋼製の精密歯車、歯形精度DINクラス5、減速機・変速機等の伝動機構に適応。各種標準・非標準歯車のカスタム製作可能。' }, specs: [ { label: { zh: '精度等级', en: 'Accuracy', ja: '精度等級' }, value: 'DIN 5级' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '45#钢/合金钢' }, { label: { zh: '模数范围', en: 'Module Range', ja: 'モジュール範囲' }, value: 'M1-M20' }, { label: { zh: '表面处理', en: 'Surface Treatment', ja: '表面処理' }, value: '渗碳淬火/镀铬' } ] },
    p2: { icon: '🔩', title: { zh: '异形轴类零件', en: 'Special Shaft Parts', ja: '異形軸部品' }, desc: { zh: '各类异形轴类零件精密加工，包括阶梯轴、花键轴、偏心轴等，同轴度公差可控制在0.005mm以内。', en: 'Precision machining of various special shaft parts including stepped shafts, spline shafts, eccentric shafts, with coaxiality tolerance within 0.005mm.', ja: '各種異形軸部品（段付軸、スプライン軸、偏心軸等）の精密加工、同軸度公差0.005mm以内。' }, specs: [ { label: { zh: '同轴度', en: 'Coaxiality', ja: '同軸度' }, value: '≤0.005mm' }, { label: { zh: '表面粗糙度', en: 'Surface Roughness', ja: '表面粗さ' }, value: 'Ra≤0.8μm' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '不锈钢/铝合金' }, { label: { zh: '直径范围', en: 'Diameter Range', ja: '径範囲' }, value: 'Ø5-Ø300mm' } ] },
    p3: { icon: '🔧', title: { zh: '精密模具零件', en: 'Precision Mold Parts', ja: '精密金型部品' }, desc: { zh: '精密模具零件加工，包括模仁、模芯、顶针板等，采用高品质模具钢精密制造，尺寸稳定性好，使用寿命长。', en: 'Precision mold parts including mold cores, inserts, ejector plates, made of high-quality mold steel with excellent dimensional stability.', ja: '精密金型部品加工（モールドコア、インサート、エジェクタープレート等）、高品質金型鋼製、優れた寸法安定性。' }, specs: [ { label: { zh: '加工精度', en: 'Accuracy', ja: '加工精度' }, value: '±0.003mm' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: 'P20/H13/S136' }, { label: { zh: '硬度', en: 'Hardness', ja: '硬度' }, value: 'HRC28-52' }, { label: { zh: '表面粗糙度', en: 'Surface Roughness', ja: '表面粗さ' }, value: 'Ra≤0.4μm' } ] },
    p4: { icon: '🏗️', title: { zh: '结构件总成', en: 'Structural Assembly', ja: '構造体アセンブリ' }, desc: { zh: '各类机械结构件精密加工与装配，包括箱体、支架、底座等，可提供完整的总成服务。', en: 'Precision machining and assembly of mechanical structural parts including housings, brackets, bases, with complete assembly services.', ja: '各種機械構造部品（ハウジング・ブラケット・ベース等）の精密加工と組立、完全アセンブリサービス提供。' }, specs: [ { label: { zh: '定位精度', en: 'Positioning Accuracy', ja: '位置決め精度' }, value: '±0.01mm' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '铸铁/碳钢/不锈钢' }, { label: { zh: '最大尺寸', en: 'Max Size', ja: '最大サイズ' }, value: '1500mm' }, { label: { zh: '检测标准', en: 'Inspection Standard', ja: '検査基準' }, value: 'ISO 1101' } ] },
    p5: { icon: '💎', title: { zh: '精密法兰盘', en: 'Precision Flanges', ja: '精密フランジ' }, desc: { zh: '各标准及非标准法兰盘精密加工，平面度控制在0.02mm以内，密封面表面粗糙度达Ra1.6，满足各种密封要求。', en: 'Standard and non-standard precision flanges with flatness within 0.02mm and sealing surface Ra1.6 for various sealing applications.', ja: '各種標準・非標準フランジの精密加工、平面度0.02mm以内、シール面粗さRa1.6、各種シール要件に対応。' }, specs: [ { label: { zh: '平面度', en: 'Flatness', ja: '平面度' }, value: '≤0.02mm' }, { label: { zh: '密封面粗糙度', en: 'Sealing Surface Ra', ja: 'シール面粗さ' }, value: 'Ra≤1.6μm' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '304/316不锈钢' }, { label: { zh: '压力等级', en: 'Pressure Rating', ja: '圧力等級' }, value: 'PN6-PN160' } ] },
    p6: { icon: '🔮', title: { zh: '铝合金壳体', en: 'Aluminum Alloy Housing', ja: 'アルミ合金ハウジング' }, desc: { zh: '航空级铝合金精密壳体加工，重量轻、强度高，尺寸精度高，广泛用于电子设备、仪器仪表等精密产品外壳。', en: 'Aerospace-grade aluminum alloy precision housings, lightweight, high strength, excellent dimensional accuracy for electronic equipment and instruments.', ja: '航空グレードアルミ合金精密ハウジング、軽量・高強度・高精度、電子機器・計測器等の筐体に広く使用。' }, specs: [ { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '6061/7075-T6' }, { label: { zh: '加工精度', en: 'Accuracy', ja: '加工精度' }, value: '±0.01mm' }, { label: { zh: '表面处理', en: 'Surface Treatment', ja: '表面処理' }, value: '阳极氧化/喷砂' }, { label: { zh: '壁厚最薄', en: 'Min Wall Thickness', ja: '最小肉厚' }, value: '0.5mm' } ] },
    p7: { icon: '🛠️', title: { zh: '连接器支架', en: 'Connector Brackets', ja: 'コネクタブラケット' }, desc: { zh: '各类精密连接器支架加工，孔位精度高，适用于电子、通信、汽车等行业的精密连接组件。', en: 'Precision connector brackets with high hole position accuracy for electronics, communications, and automotive industries.', ja: '各種精密コネクタブラケット加工、高孔位精度、電子・通信・自動車産業向け精密接続部品。' }, specs: [ { label: { zh: '孔位精度', en: 'Hole Position Accuracy', ja: '孔位置精度' }, value: '±0.02mm' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '铝合金/不锈钢' }, { label: { zh: '表面处理', en: 'Surface Treatment', ja: '表面処理' }, value: '氧化/电镀' }, { label: { zh: '批量能力', en: 'Batch Capability', ja: 'バッチ能力' }, value: '1-100,000件' } ] },
    p8: { icon: '🔑', title: { zh: '精密键槽零件', en: 'Keyway Parts', ja: '精密キー溝部品' }, desc: { zh: '精密键槽加工零件，键槽尺寸精度高，对称度好，适用于各类传动轴、齿轮等需要键连接的精密零件。', en: 'Precision keyway parts with high dimensional accuracy and symmetry for transmission shafts, gears and other keyed components.', ja: '精密キー溝加工部品、高寸法精度・対称性、各種伝動軸・歯車等のキー接続部品に適応。' }, specs: [ { label: { zh: '键槽精度', en: 'Keyway Accuracy', ja: 'キー溝精度' }, value: 'H7/h6' }, { label: { zh: '对称度', en: 'Symmetry', ja: '対称度' }, value: '≤0.02mm' }, { label: { zh: '材质', en: 'Material', ja: '材質' }, value: '合金钢/工具钢' }, { label: { zh: '热处理', en: 'Heat Treatment', ja: '熱処理' }, value: 'HRC55-62' } ] }
};

window.openProductModal = function(id) {
    const data = productModalData[id];
    if (!data) return;
    const lang = currentLang;
    let specsHtml = '';
    data.specs.forEach(spec => {
        specsHtml += `<div class="modal-spec-row">
            <strong>${spec.label[lang] || spec.label.zh}</strong>
            <span>${spec.value}</span>
        </div>`;
    });
    const quoteBtnText = { zh: '询价定制', en: 'Request Quote', ja: '見積依頼' };
    // 尝试加载云端图片
    const cloudImgId = productImageMapping[id];
    const cloudImgUrl = cloudImgId ? getCloudImageUrl(cloudImgId) : null;
    let imgHtml = '';
    if (cloudImgUrl) {
        imgHtml = `<div class="modal-image" style="width:100%;height:180px;border-radius:12px;overflow:hidden;margin-bottom:16px">
            <img src="${cloudImgUrl}" style="width:100%;height:100%;object-fit:cover" alt="${data.title[lang] || data.title.zh}" onerror="this.parentElement.style.display='none';this.parentElement.nextElementSibling.style.display='flex'">
        </div>
        <div class="modal-icon" style="display:none">${data.icon}</div>`;
    } else {
        imgHtml = `<div class="modal-icon">${data.icon}</div>`;
    }
    document.getElementById('modalContent').innerHTML = `
        ${imgHtml}
        <div class="modal-title">${data.title[lang] || data.title.zh}</div>
        <div class="modal-desc">${data.desc[lang] || data.desc.zh}</div>
        <div class="modal-specs">${specsHtml}</div>
        <a href="#message" class="btn-primary" style="width:100%;justify-content:center;text-decoration:none;margin-top:5px" onclick="closeModalBtn()">🔧 ${quoteBtnText[lang]}</a>
    `;
    document.getElementById('modalOverlay').classList.add('active');
}

window.closeModal = function(e) {
    if (e && e.target === document.getElementById('modalOverlay')) {
        window.closeModalBtn();
    }
}

window.closeModalBtn = function() {
    document.getElementById('modalOverlay').classList.remove('active');
}

// 离线缓存：当云端不可用时，使用 localStorage 作为备用
function saveToOfflineCache(data, type) {
    try {
        const cacheKey = `fx_${type}_offline`;
        const cacheData = {
            data: data,
            timestamp: Date.now(),
            synced: false
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        console.log(`已保存到离线缓存: ${type}`);
    } catch (error) {
        console.error('保存离线缓存失败:', error);
    }
}

// 从离线缓存读取数据
function loadFromOfflineCache(type) {
    try {
        const cacheKey = `fx_${type}_offline`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            const data = JSON.parse(cached);
            console.log(`从离线缓存加载: ${type}`);
            return data.data;
        }
    } catch (error) {
        console.error('加载离线缓存失败:', error);
    }
    return null;
}

// 同步离线数据到云端
async function syncOfflineData(type) {
    try {
        const cacheKey = `fx_${type}_offline`;
        const cached = localStorage.getItem(cacheKey);
        if (!cached) return;
        
        const cacheData = JSON.parse(cached);
        if (cacheData.synced) return; // 已同步，跳过
        
        console.log(`同步离线数据到云端: ${type}`);
        if (type === 'messages') {
            await saveMessagesToCloud(cacheData.data);
        } else if (type === 'images') {
            await saveImagesToCloud(cacheData.data);
        }
        
        // 标记为已同步
        cacheData.synced = true;
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
        console.error(`同步离线数据失败: ${type}`, error);
    }
}

// ===== 留言提交 =====
const defaultMessages = [
    { name: '张经理', avatar: '张', avatarClass: 'avatar-blue', company: '成都某汽车零部件公司', date: '2024-01-15', stars: 5, text: '合作两年多了，复兴机械的加工精度和交货期都非常可靠。特别是精密齿轮加工，尺寸精度完全满足我们的要求，是值得长期合作的供应商！' },
    { name: '李工程师', avatar: '李', avatarClass: 'avatar-orange', company: '北京某航空设备公司', date: '2024-02-20', stars: 5, text: '我们有一批航空铝合金零件需要加工，公差要求非常严格。复兴机械认真负责，最终交付的产品完全合格，服务态度也很好，强烈推荐！' },
    { name: '王总', avatar: '王', avatarClass: 'avatar-green', company: '重庆某机械设备公司', date: '2024-03-08', stars: 4, text: '线切割加工的精度很高，模具零件一次合格，节省了很多返工时间和成本。价格也比较合理，整体性价比很高，值得推荐。' }
];

let userMessages = [];

function renderMessages() {
    const allMessages = [...defaultMessages, ...userMessages];
    const list = document.getElementById('messagesList');
    const avatarColors = ['avatar-blue', 'avatar-orange', 'avatar-green'];
    let html = '';
    allMessages.slice(-6).forEach((msg, i) => {
        const stars = '★'.repeat(msg.stars) + (msg.stars < 5 ? '⭐'.repeat(5 - msg.stars) : '');
        const avatarClass = msg.avatarClass || avatarColors[i % 3];
        html += `<div class="message-item">
            <div class="message-header">
                <div class="message-avatar ${avatarClass}">${msg.avatar}</div>
                <div class="message-meta">
                    <strong>${msg.name}</strong>
                    <span>${msg.company || ''} · ${msg.date}</span>
                </div>
            </div>
            <div class="message-stars">${stars}</div>
            <div class="message-text">${msg.text}</div>
        </div>`;
    });
    list.innerHTML = html;
}

async function submitMessage(e) {
    e.preventDefault();

    // 防止重复提交：禁用按钮
    const submitBtn = document.querySelector('#messageForm .form-submit');
    if (submitBtn && submitBtn.disabled) return;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
        const originalBtnText = submitBtn.innerHTML;
        const submittingText = { zh: '⏳ 提交中...', en: '⏳ Submitting...', ja: '⏳ 送信中...' };
        submitBtn.innerHTML = submittingText[currentLang] || submittingText.zh;
    }

    const name = document.getElementById('msgName').value.trim();
    const phone = document.getElementById('msgPhone').value.trim();
    const company = document.getElementById('msgCompany').value.trim();
    const content = document.getElementById('msgContent').value.trim();
    const typeEl = document.getElementById('msgType');
    const typeVal = typeEl ? typeEl.value : '';

    if (!name || !phone || !content || !typeVal) {
        alert('请填写必填项：姓名、电话、咨询类型和内容');
        // 恢复按钮状态
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '';
            submitBtn.style.cursor = '';
        }
        return;
    }

    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    const avatarColors = ['avatar-blue', 'avatar-orange', 'avatar-green'];

    userMessages.push({
        name: name,
        avatar: name.charAt(0),
        avatarClass: avatarColors[userMessages.length % 3],
        company: company || (currentLang === 'zh' ? '客户' : currentLang === 'en' ? 'Customer' : 'お客槙'),
        date: date,
        stars: 5,
        text: content
    });
    
    // 立即显示成功提示，不等待云端响应
    const toast = document.getElementById('successToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);

    // 重置表单
    document.getElementById('messageForm').reset();

    // 更新留言列表
    renderMessages();

    // 异步保存到云端（不阻塞用户体验）
    // saveMessagesToCloud 内置5次重试+指数退避，失败后自动加入重试队列持续同步
    const emailEl = document.getElementById('msgEmail');
    
    const newMessage = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: emailEl ? emailEl.value.trim() : '',
        company: company,
        type: typeVal,
        content: content,
        date: date,
        stars: 5,
        status: 'new',
        source: 'web'
    };
    
    // 后台异步保存
    (async function() {
        try {
            if (isCloudConfigured()) {
                var cloudMessages = await fetchMessagesFromCloud();
                var messages = cloudMessages || [];
                messages.unshift(newMessage);
                var success = await saveMessagesToCloud(messages);
                if (success) {
                    console.log('留言已成功保存到云端');
                } else {
                    // saveMessagesToCloud 已将数据加入重试队列，不会丢失
                    console.warn('留言云端保存失败，已加入重试队列');
                }
            } else {
                // 云端未配置，仅保存到本地
                var _msgs = JSON.parse(localStorage.getItem('fx_messages') || '[]');
                _msgs.unshift(newMessage);
                localStorage.setItem('fx_messages', JSON.stringify(_msgs));
            }
        } catch(error) {
            // 最终兆底：确保本地一定有数据
            console.error('留言保存异常:', error);
            try {
                var _msgs = JSON.parse(localStorage.getItem('fx_messages') || '[]');
                // 检查是否已存在（避免重复）
                var exists = _msgs.some(function(m) { return m.id === newMessage.id; });
                if (!exists) {
                    _msgs.unshift(newMessage);
                    localStorage.setItem('fx_messages', JSON.stringify(_msgs));
                    saveToOfflineCache(_msgs, 'messages');
                }
            } catch(e) {
                console.error('本地保存也失败:', e);
            }
        } finally {
            // 恢复按钮状态
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '';
                submitBtn.style.cursor = '';
                const btnTexts = { zh: '🚀 立即提交留言', en: '🚀 Submit Message', ja: '🚀 送信する' };
                submitBtn.innerHTML = btnTexts[currentLang] || btnTexts.zh;
            }
        }
    })();

    // 滚动到留言展示区
    setTimeout(() => {
        document.querySelector('.messages-display').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
}

// ===== 页面加载动画 =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('pageLoader');
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1800);
});

// ===== 数字计数动画 =====
function animateNumbers() {
    const stats = [
        { el: document.querySelector('.stat-number:nth-child(1)'), target: 20, suffix: '+' },
        { el: document.querySelector('.stat-number:nth-child(2)'), target: 500, suffix: '+' },
        { el: document.querySelector('.stat-number:nth-child(3)'), target: 30, suffix: '+' },
        { el: document.querySelector('.stat-number:nth-child(4)'), target: 99, suffix: '%' },
    ];
}

// ===== 导航点击平滑跳转 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navHeight = document.getElementById('navbar').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
            // 关闭移动菜单
            document.getElementById('navMenu').classList.remove('open');
        }
    });
});

// ===== 初始化 =====
renderMessages();

// ===== 添加CSS动画 =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .equipment-card, .feature-card, .product-card, .cert-card {
        animation: fadeInUp 0.5s ease forwards;
    }
`;
document.head.appendChild(style);

// ===== 暴露全局函数供 onclick/onsubmit 调用（兼容 Safari 块级函数作用域）=====
window.switchLang      = switchLang;
window.toggleMenu      = toggleMenu;
window.filterEquipment = filterEquipment;
window.openEquipModal  = openEquipModal;
window.openProductModal= openProductModal;
window.closeModal      = closeModal;
window.closeModalBtn   = closeModalBtn;
window.submitMessage   = submitMessage;
window.scrollToTop     = scrollToTop;

/* ---------- Web 版脚本 结束 ---------- */
