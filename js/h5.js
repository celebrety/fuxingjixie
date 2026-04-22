/* ---------- H5 版脚本 开始 ---------- */

// ============================================================
//  多语言数据
// ============================================================
const langs = {
    zh: {
        'company-name': '成都市青白江区复兴机械厂',
        'company-short': '复兴机械厂',
        'nav-home':'首页','nav-about':'关于我们','nav-equipment':'设备中心',
        'nav-products':'产品展示','nav-process':'工艺流程','nav-message':'在线留言',
        'nav-call':'电话咨询','call-now':'立即拨打咨询',
        'hero-badge':'专业机械加工 · 精密制造',
        'hero-t1':'精密制造','hero-t2':'成就品质未来',
        'hero-sub':'二十余年深耕精密机械加工，先进数控机床与线切割设备，为您提供高精度解决方案',
        'hero-btn1':'查看产品','hero-btn2':'联系我们',
        's1':'年经验','s2':'服务客户','s3':'先进设备','s4':'满意度',
        'notice':'【最新公告】复兴机械厂新引进日本进口五轴加工中心已正式投产，欢迎新老客户前来参观洽谈！',
        'qe1':'设备中心','qe2':'产品展示','qe3':'在线留言','qe4':'电话咨询',
        'feat-tag':'核心优势','feat-title':'为什么选择复兴机械','feat-desc':'技术、品质、服务三位一体，20年品牌沉淀',
        'f1t':'先进设备','f1d':'引进国内外先进数控设备，加工精度达微米级',
        'f2t':'精密加工','f2d':'公差控制±0.005mm，满足各类高精度要求',
        'f3t':'资深团队','f3d':'60余名专业技师，高级技师15名坐镇把关',
        'f4t':'快速交货','f4d':'科学生产调度，按时交货，支持加急订单',
        'eq-tag':'设备中心','eq-title':'先进加工设备','eq-desc':'引进国内外一流设备，保障加工精度与质量',
        'ef-all':'全部设备','ef-cnc':'数控机床','ef-wire':'线切割','ef-other':'其他设备',
        'tag-cnc':'数控机床','tag-wire':'线切割','tag-other':'其他',
        'eq1n':'五轴联动加工中心','eq1d':'高精度五轴联动CNC，可加工复杂曲面',
        'eq2n':'数控车削加工中心','eq2d':'自动换刀，高效精密加工回转体零件',
        'eq3n':'卧式加工中心','eq3d':'800×800台面，高刚性大型零件加工',
        'eq4n':'慢走丝线切割机床','eq4d':'精度±0.002mm，精密模具首选',
        'eq5n':'快走丝线切割机床','eq5d':'高速切割，大批量低成本',
        'eq6n':'电火花成形机','eq6d':'加工硬质材料，复杂型腔',
        'pd-tag':'产品展示','pd-title':'精密加工成品','pd-desc':'覆盖各行业，从零件到总成',
        'p1n':'精密齿轮','p1m':'45#钢 / 合金钢',
        'p2n':'异形轴类零件','p2m':'不锈钢 / 铝合金',
        'p3n':'精密模具零件','p3m':'P20 / H13钢',
        'p4n':'结构件总成','p4m':'铸铁 / 碳钢',
        'p5n':'精密法兰盘','p5m':'304不锈钢',
        'p6n':'铝合金壳体','p6m':'6061 / 7075',
        'p7n':'连接器支架','p7m':'铝合金 / 不锈钢',
        'p8n':'精密键槽零件','p8m':'合金钢 / 工具钢',
        'view':'详情 ›',
        'pr-tag':'生产流程','pr-title':'标准化工艺流程','pr-desc':'严格执行标准流程，确保每道工序可控',
        'pr1t':'需求评审','pr1d':'技术团队评审图纸、材料及精度要求，确认可行性',
        'pr2t':'编程设计','pr2d':'CAD/CAM辅助工艺设计与数控程序编制，模拟验证',
        'pr3t':'精密加工','pr3d':'数控设备精密加工，全程监控，实时记录数据',
        'pr4t':'质量检测','pr4d':'三坐标全尺寸检测，出具完整检测报告',
        'pr5t':'包装交货','pr5d':'防锈专业包装，全程跟踪，安全准时送达',
        'ab-tag':'关于我们','ab-title':'成都市青白江区复兴机械厂',
        'ab-card-title':'精益求精 · 诚信为本',
        'ab-card-desc':'成立于2000年代初，坐落于成都市青白江区工业园区，专业从事精密机械加工二十余年。',
        'ab-s1':'年经验','ab-s2':'专业技师','ab-s3':'台套设备',
        'ab-list-title':'🏭 工厂实力',
        'ab-l1':'厂区面积约5000平方米，现代化车间及精密检测室',
        'ab-l2':'引进日本、德国进口数控设备30余台套',
        'ab-l3':'高级技师15名，工程师10名，技术力量雄厚',
        'ab-l4':'通过ISO 9001质量管理体系认证',
        'ab-l5':'年产值超3000万元，服务客户遍及全国及海外',
        'ct-tag':'资质认证','ct-title':'荣誉资质',
        'ct1':'质量管理体系认证','ct2':'环境管理体系认证',
        'ct3':'高新技术企业','ct3d':'国家认定高新企业',
        'ct4':'AAA信用企业','ct4d':'诚信经营典范',
        'rv-tag':'客户评价','rv-title':'客户怎么说',
        'pt-tag':'合作伙伴',
        'msg-tag':'联系我们','msg-title':'随时与我们联系','msg-desc':'在线留言，24小时内回复',
        'cc-phone':'联系电话','cc-email':'电子邮箱',
        'cc-addr':'工厂地址','cc-addr-val':'成都市青白江区工业园区XXX路XX号',
        'cc-hours':'工作时间','cc-hours-val':'周一至周六 08:00-18:00',
        'form-title':'在线留言','form-ok':'留言成功！我们将在24小时内与您联系。',
        'fn':'姓名','fp':'电话','fc':'公司名称','ft':'咨询类型',
        'fo0':'请选择','fo1':'产品询价','fo2':'技术咨询','fo3':'合作洽谈','fo4':'其他',
        'fm':'留言内容','fs':'提交留言',
        'ul-tag':'留言墙','ul-title':'用户留言',
        'footer-desc':'专注精密机械加工二十余年，以精湛工艺和可靠品质赢得客户信赖。',
        'footer-copy':'© 2024 成都市青白江区复兴机械厂 版权所有',
        'footer-icp':'蜀ICP备XXXXXX号',
        'tab1':'首页','tab2':'设备','tab3':'留言','tab4':'产品','tab5':'更多',
        'modal-quote':'立即询价',
        'pl-gear':'合金钢',
        'pl-ss':'不锈钢',
        'pl-mold':'模具钢',
        'pl-cast':'铸铁',
        'pl-304ss':'304不锈钢',
        'pl-alu':'铝合金',
        'pl-aluss':'铝/不锈钢',
        'pl-tool':'工具钢',
        'rv1n':'张经理','rv1c':'成都某汽车零部件公司',
        'rv1t':'合作两年多，复兴机械的加工精度和交货期非常可靠，精密齿轮加工完全满足要求！',
        'rv2n':'李工程师','rv2c':'北京某航空设备公司',
        'rv2t':'航空铝合金零件公差极严，复兴机械认真负责，一次合格，强烈推荐！',
        'rv3n':'王总','rv3c':'重庆某机械设备公司',
        'rv3t':'线切割精度很高，模具零件一次合格，价格合理，性价比很高！',
        'pt1':'中航工业','pt2':'比亚迪','pt3':'国家电网',
        'pt4':'东方电气','pt5':'中国航天','pt6':'三一重工',
        'pt7':'中石化','pt8':'华为技术',
        'spec-auto':'自动换刀','spec-hprec':'高精度','spec-5axis':'五轴联动',
        'spec-800':'800×800台面','spec-rigid':'高刚性',
        'spec-002':'±0.002mm','spec-mirror':'镜面精度',
        'spec-hspeed':'高速切割','spec-batch':'大批量',
        'spec-hard':'硬质材料','spec-cavity':'复杂型腔'
    },
    en: {
        'company-name':'Fuxing Machinery Factory, Chengdu',
        'company-short':'Fuxing Machinery',
        'nav-home':'Home','nav-about':'About','nav-equipment':'Equipment',
        'nav-products':'Products','nav-process':'Process','nav-message':'Message',
        'nav-call':'Call Us','call-now':'Call Now',
        'hero-badge':'Professional CNC Machining',
        'hero-t1':'Precision Manufacturing','hero-t2':'Quality for the Future',
        'hero-sub':'20+ years in precision machining, advanced CNC & wire cutting equipment for high-precision solutions',
        'hero-btn1':'Our Products','hero-btn2':'Contact Us',
        's1':'Yrs Exp.','s2':'Customers','s3':'Equipment','s4':'Satisfaction',
        'notice':'[Notice] New 5-axis machining center has been put into production. Welcome to visit!',
        'qe1':'Equipment','qe2':'Products','qe3':'Message','qe4':'Call Us',
        'feat-tag':'Core Advantages','feat-title':'Why Choose Fuxing Machinery','feat-desc':'Technology, quality & service - 20 years of excellence',
        'f1t':'Advanced Equipment','f1d':'State-of-art CNC equipment with micron-level precision',
        'f2t':'Precision Machining','f2d':'Tolerance within ±0.005mm for high-precision needs',
        'f3t':'Expert Team','f3d':'60+ technicians, 15 senior technicians on site',
        'f4t':'Fast Delivery','f4d':'Scientific scheduling, on-time delivery, rush orders supported',
        'eq-tag':'Equipment','eq-title':'Advanced Machining Equipment','eq-desc':'Top-class equipment for precision and quality assurance',
        'ef-all':'All','ef-cnc':'CNC Machines','ef-wire':'Wire Cutting','ef-other':'Others',
        'tag-cnc':'CNC Machine','tag-wire':'Wire Cutting','tag-other':'Others',
        'eq1n':'5-Axis Machining Center','eq1d':'High-precision 5-axis CNC for complex surfaces',
        'eq2n':'CNC Turning Center','eq2d':'Auto tool change, efficient turning of rotary parts',
        'eq3n':'Horizontal Machining Center','eq3d':'800×800mm table for large box-type parts',
        'eq4n':'Slow-Feed Wire EDM','eq4d':'±0.002mm accuracy, ideal for precision molds',
        'eq5n':'Fast-Feed Wire EDM','eq5d':'High speed, mass production, low cost',
        'eq6n':'EDM Forming Machine','eq6d':'Hard materials, complex cavities machining',
        'pd-tag':'Products','pd-title':'Precision Machined Products','pd-desc':'Covering all industries, from parts to assemblies',
        'p1n':'Precision Gears','p1m':'45# Steel / Alloy Steel',
        'p2n':'Special Shaft Parts','p2m':'Stainless Steel / Aluminum',
        'p3n':'Precision Mold Parts','p3m':'P20 / H13 Mold Steel',
        'p4n':'Structural Assembly','p4m':'Cast Iron / Carbon Steel',
        'p5n':'Precision Flanges','p5m':'304 Stainless Steel',
        'p6n':'Aluminum Housing','p6m':'6061 / 7075 Aluminum',
        'p7n':'Connector Brackets','p7m':'Aluminum / Stainless Steel',
        'p8n':'Keyway Parts','p8m':'Alloy Steel / Tool Steel',
        'view':'Details ›',
        'pr-tag':'Process','pr-title':'Standardized Process Flow','pr-desc':'Strictly follow processes to ensure quality at every step',
        'pr1t':'Requirements Review','pr1d':'Team reviews drawings, materials and precision requirements',
        'pr2t':'Programming','pr2d':'CAD/CAM process design and CNC program preparation',
        'pr3t':'Precision Machining','pr3d':'CNC precision machining with real-time monitoring',
        'pr4t':'Quality Inspection','pr4d':'CMM full-dimension inspection with detailed reports',
        'pr5t':'Packaging & Delivery','pr5d':'Anti-rust packaging, tracked logistics, on-time delivery',
        'ab-tag':'About Us','ab-title':'Fuxing Machinery Factory, Chengdu',
        'ab-card-title':'Excellence · Integrity',
        'ab-card-desc':'Established in the early 2000s in Qingbaijiang Industrial Park, 20+ years of precision machining expertise.',
        'ab-s1':'Yrs Exp.','ab-s2':'Technicians','ab-s3':'Equipment Sets',
        'ab-list-title':'🏭 Factory Strength',
        'ab-l1':'5,000 sqm factory with modern workshops and precision inspection rooms',
        'ab-l2':'30+ imported CNC equipment sets from Japan & Germany',
        'ab-l3':'15 senior technicians, 10 engineers on site',
        'ab-l4':'ISO 9001 Quality Management System certified',
        'ab-l5':'Annual output 30M+ CNY, customers nationwide and overseas',
        'ct-tag':'Certifications','ct-title':'Honors & Qualifications',
        'ct1':'Quality Management Cert.','ct2':'Environmental Management Cert.',
        'ct3':'High-Tech Enterprise','ct3d':'State-recognized high-tech enterprise',
        'ct4':'AAA Credit Enterprise','ct4d':'Model of integrity in business',
        'rv-tag':'Reviews','rv-title':'What Customers Say',
        'pt-tag':'Partners',
        'msg-tag':'Contact','msg-title':'Get In Touch Anytime','msg-desc':'Leave a message, reply within 24 hours',
        'cc-phone':'Phone','cc-email':'Email',
        'cc-addr':'Factory Address','cc-addr-val':'No.XX, XXX Road, Qingbaijiang Industrial Park, Chengdu',
        'cc-hours':'Working Hours','cc-hours-val':'Mon-Sat 08:00-18:00',
        'form-title':'Online Message','form-ok':'Submitted! We will contact you within 24 hours.',
        'fn':'Name','fp':'Phone','fc':'Company','ft':'Inquiry Type',
        'fo0':'Please select','fo1':'Product Quote','fo2':'Technical Consult','fo3':'Business Cooperation','fo4':'Other',
        'fm':'Message','fs':'Submit',
        'ul-tag':'Message Wall','ul-title':'User Messages',
        'footer-desc':'20+ years of precision machining, winning trust with craftsmanship and reliability.',
        'footer-copy':'© 2024 Fuxing Machinery Factory. All Rights Reserved.',
        'footer-icp':'Shu ICP No.XXXXXX',
        'tab1':'Home','tab2':'Equipment','tab3':'Message','tab4':'Products','tab5':'More',
        'modal-quote':'Get Quote',
        'pl-gear':'Alloy Steel',
        'pl-ss':'Stainless Steel',
        'pl-mold':'Mold Steel',
        'pl-cast':'Cast Iron',
        'pl-304ss':'304 Stainless',
        'pl-alu':'Aluminum',
        'pl-aluss':'Alu/Stainless',
        'pl-tool':'Tool Steel',
        'rv1n':'Manager Zhang','rv1c':'Chengdu Auto Parts Co.',
        'rv1t':'Great accuracy and reliable delivery. Precision gear machining fully meets our requirements!',
        'rv2n':'Engineer Li','rv2c':'Beijing Aviation Equipment Co.',
        'rv2t':'Strict aerospace tolerances met perfectly. Highly recommended!',
        'rv3n':'Director Wang','rv3c':'Chongqing Machinery Co.',
        'rv3t':'High wire cutting accuracy, mold parts passed first try. Great value!',
        'pt1':'AVIC','pt2':'BYD','pt3':'State Grid',
        'pt4':'Dongfang Electric','pt5':'CASC','pt6':'SANY',
        'pt7':'Sinopec','pt8':'Huawei Tech',
        'spec-auto':'Auto Tool Change','spec-hprec':'High Precision','spec-5axis':'5-Axis',
        'spec-800':'800×800 Table','spec-rigid':'High Rigidity',
        'spec-002':'±0.002mm','spec-mirror':'Mirror Finish',
        'spec-hspeed':'High Speed','spec-batch':'Mass Production',
        'spec-hard':'Hard Materials','spec-cavity':'Complex Cavities'
    },
    ja: {
        'company-name':'成都市青白江区復興機械工場',
        'company-short':'復興機械工場',
        'nav-home':'ホーム','nav-about':'会社概要','nav-equipment':'設備センター',
        'nav-products':'製品展示','nav-process':'工程フロー','nav-message':'お問い合わせ',
        'nav-call':'電話相談','call-now':'今すぐ電話する',
        'hero-badge':'精密機械加工のプロフェッショナル',
        'hero-t1':'精密製造','hero-t2':'品質で未来を創る',
        'hero-sub':'20年以上の精密機械加工の実績、最先端CNC・ワイヤーカット設備で高精度ソリューションを提供',
        'hero-btn1':'製品を見る','hero-btn2':'お問い合わせ',
        's1':'年の実績','s2':'お客様','s3':'先進設備','s4':'満足度',
        'notice':'【お知らせ】日本製5軸加工センターが新規導入、稼働開始しました！見学・商談歓迎！',
        'qe1':'設備センター','qe2':'製品展示','qe3':'お問い合わせ','qe4':'電話相談',
        'feat-tag':'主な強み','feat-title':'復興機械を選ぶ理由','feat-desc':'技術・品質・サービスの三位一体、20年のブランド',
        'f1t':'先進設備','f1d':'国内外の最先端CNC設備、ミクロン精度を実現',
        'f2t':'精密加工','f2d':'公差±0.005mm以内、高精度要求に対応',
        'f3t':'熟練チーム','f3d':'技術者60名以上、上級技師15名が品質保証',
        'f4t':'迅速納品','f4d':'科学的な生産管理で納期厳守、緊急対応可能',
        'eq-tag':'設備センター','eq-title':'最先端加工設備','eq-desc':'一流設備で加工精度と品質を全面保証',
        'ef-all':'全設備','ef-cnc':'CNC工作機械','ef-wire':'ワイヤーカット','ef-other':'その他',
        'tag-cnc':'CNC工作機械','tag-wire':'ワイヤーカット','tag-other':'その他',
        'eq1n':'5軸加工センター','eq1d':'高精度5軸CNC、複雑曲面部品の加工に対応',
        'eq2n':'CNC旋削加工センター','eq2d':'自動工具交換、回転体部品の高効率加工',
        'eq3n':'横型加工センター','eq3d':'800×800テーブル、大型箱型部品加工',
        'eq4n':'ワイヤー放電加工機（細線）','eq4d':'精度±0.002mm、精密金型加工に最適',
        'eq5n':'ワイヤー放電加工機（高速）','eq5d':'高速切断、大量生産・低コスト',
        'eq6n':'放電成形加工機','eq6d':'硬質材料・複雑キャビティ加工',
        'pd-tag':'製品展示','pd-title':'精密加工製品','pd-desc':'各業界対応、部品からアセンブリまで',
        'p1n':'精密歯車','p1m':'45#鋼 / 合金鋼',
        'p2n':'異形軸部品','p2m':'ステンレス / アルミ合金',
        'p3n':'精密金型部品','p3m':'P20 / H13金型鋼',
        'p4n':'構造体アセンブリ','p4m':'鋳鉄 / 炭素鋼',
        'p5n':'精密フランジ','p5m':'304ステンレス',
        'p6n':'アルミ合金ハウジング','p6m':'6061 / 7075アルミ',
        'p7n':'コネクタブラケット','p7m':'アルミ合金 / ステンレス',
        'p8n':'精密キー溝部品','p8m':'合金鋼 / 工具鋼',
        'view':'詳細 ›',
        'pr-tag':'生産工程','pr-title':'標準化工程フロー','pr-desc':'標準工程を厳守し各工程の品質を確保',
        'pr1t':'要件審査','pr1d':'図面・材料・精度要求を審査、実現可能性確認',
        'pr2t':'プログラミング','pr2d':'CAD/CAMで工程設計とNCプログラム作成・検証',
        'pr3t':'精密加工','pr3d':'CNC精密加工、全工程監視・データ記録',
        'pr4t':'品質検査','pr4d':'三次元測定機による全寸法検査、検査レポート発行',
        'pr5t':'梱包・出荷','pr5d':'防錆専用梱包、物流追跡、時間通りお届け',
        'ab-tag':'会社概要','ab-title':'成都市青白江区復興機械工場',
        'ab-card-title':'精益求精 · 誠信為本',
        'ab-card-desc':'2000年代初頭創業、成都市青白江区工業団地に位置、20年以上の精密機械加工専門メーカー。',
        'ab-s1':'年の実績','ab-s2':'専門技術者','ab-s3':'台セット設備',
        'ab-list-title':'🏭 工場の強み',
        'ab-l1':'工場面積5,000㎡、近代的工房と精密検査室完備',
        'ab-l2':'日本・ドイツ輸入CNC設備30台以上導入',
        'ab-l3':'上級技師15名、エンジニア10名が在籍',
        'ab-l4':'ISO 9001品質マネジメントシステム認証取得',
        'ab-l5':'年間生産額3,000万元超、全国・海外顧客にサービス提供',
        'ct-tag':'認証・資格','ct-title':'栄誉・資格',
        'ct1':'品質マネジメント認証','ct2':'環境マネジメント認証',
        'ct3':'ハイテク企業','ct3d':'国家認定ハイテク企業',
        'ct4':'AAAクレジット企業','ct4d':'誠実経営の模範',
        'rv-tag':'お客様の声','rv-title':'お客様からのフィードバック',
        'pt-tag':'パートナー',
        'msg-tag':'お問い合わせ','msg-title':'いつでもご連絡ください','msg-desc':'メッセージを送信、24時間以内に返答',
        'cc-phone':'電話番号','cc-email':'メールアドレス',
        'cc-addr':'工場住所','cc-addr-val':'四川省成都市青白江区工業団地XXX路XX号',
        'cc-hours':'営業時間','cc-hours-val':'月〜土 08:00-18:00',
        'form-title':'お問い合わせフォーム','form-ok':'送信完了！24時間以内にご連絡いたします。',
        'fn':'お名前','fp':'電話番号','fc':'会社名','ft':'お問い合わせ種別',
        'fo0':'選択してください','fo1':'製品見積','fo2':'技術相談','fo3':'ビジネス協力','fo4':'その他',
        'fm':'メッセージ内容','fs':'送信する',
        'ul-tag':'メッセージウォール','ul-title':'ユーザーメッセージ',
        'footer-desc':'20年以上の精密機械加工の実績、卓越した技術と信頼性でお客様の信頼を獲得。',
        'footer-copy':'© 2024 成都市青白江区復興機械工場 全著作権所有',
        'footer-icp':'蜀ICP備XXXXXX号',
        'tab1':'ホーム','tab2':'設備','tab3':'メッセージ','tab4':'製品','tab5':'メニュー',
        'modal-quote':'見積依頼',
        'pl-gear':'合金鋼',
        'pl-ss':'ステンレス',
        'pl-mold':'金型鋼',
        'pl-cast':'鋳鉄',
        'pl-304ss':'304ステンレス',
        'pl-alu':'アルミ合金',
        'pl-aluss':'アルミ/ステンレス',
        'pl-tool':'工具鋼',
        'rv1n':'張マネージャー','rv1c':'成都某自動車部品会社',
        'rv1t':'加工精度と納期が非常に信頼性が高い！精密歯車加工は完全に要件を満たしています。',
        'rv2n':'李エンジニア','rv2c':'北京某航空設備会社',
        'rv2t':'厳しい航空公差要件を完璧にクリア。強くお勧めします！',
        'rv3n':'王社長','rv3c':'重慶某機械会社',
        'rv3t':'ワイヤーカット精度が高く、金型部品が一発合格。コスパも最高！',
        'pt1':'中国航空工業','pt2':'BYD','pt3':'国家電網',
        'pt4':'東方電気','pt5':'中国航天','pt6':'三一重工',
        'pt7':'中国石化','pt8':'ファーウェイ技術',
        'spec-auto':'自動工具交換','spec-hprec':'高精度','spec-5axis':'5軸',
        'spec-800':'800×800テーブル','spec-rigid':'高剛性',
        'spec-002':'±0.002mm','spec-mirror':'鏡面仕上',
        'spec-hspeed':'高速切断','spec-batch':'大量生産',
        'spec-hard':'硬質材料','spec-cavity':'複雑キャビティ'
    }
};

let currentLang = 'zh';

// ============================================================
//  语言切换
// ============================================================
function switchLang(lang) {
    currentLang = lang;
    const data = langs[lang];
    document.querySelectorAll('[data-lang]').forEach(el => {
        const k = el.getAttribute('data-lang');
        if (data[k] !== undefined) el.textContent = data[k];
    });
    // 更新抽屉语言按钮
    ['zh','en','ja'].forEach(l => {
        const btn = document.getElementById('dlang-' + l);
        if (btn) btn.classList.toggle('active', l === lang);
    });
    // 更新html lang
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    // 更新公司名
    const dc = document.getElementById('drawerCompany');
    if (dc) dc.textContent = data['company-name'];
    closeDrawer();
    showToast(lang === 'zh' ? '已切换为中文' : lang === 'en' ? 'Switched to English' : '日本語に切替えました');
    
    // 重新渲染设备和产品（使用当前语言）
    renderH5EquipmentSection();
    renderH5ProductsSection();
}

// ============================================================
//  抽屉菜单
// ============================================================
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('drawerOverlay');
    const btn = document.getElementById('hamburgerBtn');
    const isOpen = drawer.classList.contains('show');
    if (isOpen) {
        closeDrawer();
    } else {
        drawer.classList.add('show');
        overlay.classList.add('show');
        btn.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}
function closeDrawer() {
    document.getElementById('drawer').classList.remove('show');
    document.getElementById('drawerOverlay').classList.remove('show');
    document.getElementById('hamburgerBtn').classList.remove('open');
    document.body.style.overflow = '';
}

// ============================================================
//  底部Tab点击
// ============================================================
function tabClick(el, section, event) {
    // 正确接收并处理 event 参数
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // 更新活动状态
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    // 执行平滑滚动
    smoothTo(section);
    
    return false;
}

// ============================================================
//  平滑滚动（修复版）
// ============================================================
window.smoothTo = function(id) {
    // 修复：处理重复ID问题，选择可见的元素
    const allElements = document.querySelectorAll(`#${id}`);
    let el = null;
    
    // 遍历所有匹配的元素，选择可见的那个
    for (const elem of allElements) {
        // 检查元素是否可见（offsetParent 不为 null 表示可见）
        if (elem.offsetParent !== null || elem.getBoundingClientRect().height > 0) {
            el = elem;
            break;
        }
    }
    
    // 如果没找到可见元素，使用第一个
    if (!el && allElements.length > 0) {
        el = allElements[0];
    }
    
    if (!el) {
        console.warn('目标元素不存在:', id);
        return;
    }
    
    // 计算偏移量（顶部导航栏高度 + 额外留白）
    const topbar = document.getElementById('topbar');
    const topbarHeight = topbar ? topbar.offsetHeight : 56;
    const extraOffset = 20; // 额外留白，避免贴顶
    
    const targetPosition = el.offsetTop - topbarHeight - extraOffset;
    
    console.log(`滚动到 ${id}, 目标位置: ${targetPosition}px`);
    
    // 方案1：使用现代浏览器的平滑滚动
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } else {
        // 方案2：降级为自定义动画滚动（兼容老浏览器）
        animateScroll(targetPosition, 600);
    }
    
    // 更新 URL hash（不触发页面跳转）
    if (history.pushState) {
        history.pushState(null, null, '#' + id);
    }
}

// 动画滚动（降级方案）
function animateScroll(targetPosition, duration) {
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    // easeInOutCubic 缓动函数
    function ease(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    function step(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

// ============================================================
//  导航链接拦截
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            smoothTo(id);
        }
    });
});

// ============================================================
//  滚动监听
// ============================================================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // 回到顶部
    const bt = document.getElementById('backTop');
    bt.classList.toggle('show', scrollY > 300);
    // 顶栏透明度
    const topbar = document.getElementById('topbar');
    topbar.classList.toggle('transparent', scrollY < 10);
}, { passive: true });

// ============================================================
//  设备过滤
// ============================================================
function filterEquip(cat, tabEl) {
    document.querySelectorAll('.equip-tab').forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');
    document.querySelectorAll('#equipScroll .equip-card').forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
    });
    document.getElementById('equipScroll').scrollLeft = 0;
}

// ============================================================
//  设备详情数据
// ============================================================
const equipData = {
    cnc1: {
        icon:'🤖',
        title:{ zh:'五轴联动加工中心', en:'5-Axis Machining Center', ja:'5軸加工センター' },
        desc:{ zh:'高精度五轴联动数控加工中心，可加工航空航天、精密模具等复杂曲面零件，一次装夹完成全部加工工序。', en:'High-precision 5-axis CNC machining center for complex surface parts in aerospace and mold manufacturing.', ja:'高精度5軸CNC加工センター、航空宇宙・精密金型等の複雑曲面部品加工に対応。' },
        specs:[
            { label:{zh:'加工精度',en:'Accuracy',ja:'加工精度'}, value:'±0.003mm' },
            { label:{zh:'主轴转速',en:'Spindle Speed',ja:'主軸回転数'}, value:'15,000 rpm' },
            { label:{zh:'工作台尺寸',en:'Table Size',ja:'テーブルサイズ'}, value:'600×500mm' },
            { label:{zh:'联动轴数',en:'Axes',ja:'連動軸数'}, value:'五轴联动' },
            { label:{zh:'刀库容量',en:'Tool Magazine',ja:'ツールマガジン'}, value:'24把' }
        ]
    },
    cnc2: {
        icon:'⚙️',
        title:{ zh:'数控车削加工中心', en:'CNC Turning Center', ja:'CNC旋削加工センター' },
        desc:{ zh:'精密数控车削中心，配备全功能刀塔和自动换刀系统，车铣复合，一次装夹完成多种工序。', en:'Precision CNC turning center with full-function turret for combined turning and milling in one setup.', ja:'精密CNC旋削センター、フルファンクションタレット、複合加工対応。' },
        specs:[
            { label:{zh:'加工精度',en:'Accuracy',ja:'加工精度'}, value:'±0.005mm' },
            { label:{zh:'最大加工直径',en:'Max Diameter',ja:'最大加工径'}, value:'Ø320mm' },
            { label:{zh:'最大加工长度',en:'Max Length',ja:'最大加工長'}, value:'500mm' },
            { label:{zh:'主轴转速',en:'Spindle Speed',ja:'主軸回転数'}, value:'4,500 rpm' }
        ]
    },
    cnc3: {
        icon:'🔩',
        title:{ zh:'卧式加工中心', en:'Horizontal Machining Center', ja:'横型加工センター' },
        desc:{ zh:'大型卧式加工中心，适合箱体、壳体类零件多面加工，高刚性设计保证重切削稳定性。', en:'Large horizontal machining center for multi-face machining of box and housing parts.', ja:'大型横型加工センター、箱型部品の多面加工に対応、高剛性設計。' },
        specs:[
            { label:{zh:'工作台尺寸',en:'Table Size',ja:'テーブルサイズ'}, value:'800×800mm' },
            { label:{zh:'行程X/Y/Z',en:'Travel X/Y/Z',ja:'移動量X/Y/Z'}, value:'800/700/600mm' },
            { label:{zh:'刀库容量',en:'Tool Magazine',ja:'ツールマガジン'}, value:'60把' },
            { label:{zh:'定位精度',en:'Positioning Acc.',ja:'位置決め精度'}, value:'±0.005mm' }
        ]
    },
    wire1: {
        icon:'⚡',
        title:{ zh:'慢走丝线切割机床', en:'Slow-Feed Wire EDM', ja:'ワイヤー放電加工機（細線）' },
        desc:{ zh:'高精度慢走丝电火花线切割，采用日本FANUC控制系统，镜面精度，适用于精密模具、硬质合金加工。', en:'High-precision slow-feed wire EDM with Japanese FANUC control for mirror-finish precision mold machining.', ja:'高精度細線ワイヤーEDM、日本FANUC制御、鏡面精度、精密金型加工に最適。' },
        specs:[
            { label:{zh:'切割精度',en:'Cutting Accuracy',ja:'切断精度'}, value:'±0.002mm' },
            { label:{zh:'表面粗糙度',en:'Surface Ra',ja:'表面粗さ'}, value:'Ra≤0.4μm' },
            { label:{zh:'最大切割高度',en:'Max Height',ja:'最大切断高さ'}, value:'300mm' },
            { label:{zh:'工作台行程',en:'Table Travel',ja:'テーブル移動'}, value:'500×400mm' }
        ]
    },
    wire2: {
        icon:'🔌',
        title:{ zh:'快走丝线切割机床', en:'Fast-Feed Wire EDM', ja:'ワイヤー放電加工機（高速）' },
        desc:{ zh:'高速往复走丝线切割，切割效率高，适合中等精度要求大批量零件加工，经济实用。', en:'Fast reciprocating wire EDM with high efficiency for mass production at medium precision requirements.', ja:'高速往復ワイヤーEDM、中精度大量生産に最適、コストパフォーマンス優秀。' },
        specs:[
            { label:{zh:'切割精度',en:'Cutting Accuracy',ja:'切断精度'}, value:'±0.01mm' },
            { label:{zh:'切割速度',en:'Cutting Speed',ja:'切断速度'}, value:'≥100mm²/min' },
            { label:{zh:'最大切割厚度',en:'Max Thickness',ja:'最大加工厚さ'}, value:'400mm' },
            { label:{zh:'工作台行程',en:'Table Travel',ja:'テーブル移動'}, value:'600×400mm' }
        ]
    },
    edm1: {
        icon:'🔥',
        title:{ zh:'电火花成形机', en:'EDM Forming Machine', ja:'放電成形加工機' },
        desc:{ zh:'精密电火花成形加工，可加工淬火钢、硬质合金，适合复杂型腔、深孔等难加工材料。', en:'Precision EDM forming machine for hardened steel and carbides, ideal for complex cavities and deep holes.', ja:'精密放電成形加工機、焼入鋼・超硬合金対応、複雑キャビティ・深穴加工に最適。' },
        specs:[
            { label:{zh:'加工精度',en:'Accuracy',ja:'加工精度'}, value:'±0.01mm' },
            { label:{zh:'表面粗糙度',en:'Surface Ra',ja:'表面粗さ'}, value:'Ra≤0.8μm' },
            { label:{zh:'工作台面积',en:'Table Area',ja:'テーブル面積'}, value:'700×500mm' },
            { label:{zh:'最大工件重量',en:'Max Weight',ja:'最大ワーク重量'}, value:'1000kg' }
        ]
    }
};

// ============================================================
//  产品详情数据
// ============================================================
const productData = {
    p1: { icon:'⚙️', title:{zh:'精密齿轮',en:'Precision Gears',ja:'精密歯車'}, desc:{zh:'高品质合金钢精密制造，齿形精度DIN 5级，适用于各类减速器、变速箱传动系统，支持定制各规格。',en:'High-quality alloy steel gears with DIN Class 5 accuracy for reducers and transmissions. Custom sizes available.',ja:'高品質合金鋼製、DINクラス5の歯形精度、減速機・変速機等に対応、各仕様カスタム可能。'}, specs:[{label:{zh:'精度等级',en:'Accuracy Grade',ja:'精度等級'},value:'DIN 5级'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'45#钢/合金钢'},{label:{zh:'模数范围',en:'Module',ja:'モジュール'},value:'M1-M20'},{label:{zh:'表面处理',en:'Surface',ja:'表面処理'},value:'渗碳淬火/镀铬'}] },
    p2: { icon:'🔩', title:{zh:'异形轴类零件',en:'Special Shaft Parts',ja:'異形軸部品'}, desc:{zh:'各类异形轴精密加工，包括阶梯轴、花键轴、偏心轴，同轴度公差≤0.005mm，表面质量优良。',en:'Precision stepped, spline, eccentric shafts with coaxiality tolerance within 0.005mm.',ja:'段付軸・スプライン軸・偏心軸等、同軸度公差0.005mm以内、優れた表面品質。'}, specs:[{label:{zh:'同轴度',en:'Coaxiality',ja:'同軸度'},value:'≤0.005mm'},{label:{zh:'表面粗糙度',en:'Surface Ra',ja:'表面粗さ'},value:'Ra≤0.8μm'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'不锈钢/铝合金'},{label:{zh:'直径范围',en:'Diameter',ja:'径範囲'},value:'Ø5-Ø300mm'}] },
    p3: { icon:'🔧', title:{zh:'精密模具零件',en:'Precision Mold Parts',ja:'精密金型部品'}, desc:{zh:'精密模具零件加工，含模仁、模芯、顶针板等，采用优质模具钢，尺寸稳定性好，使用寿命长。',en:'Mold cores, inserts, ejector plates made from premium mold steel with excellent dimensional stability.',ja:'モールドコア・インサート・エジェクタープレート等、高品質金型鋼製、優れた寸法安定性。'}, specs:[{label:{zh:'加工精度',en:'Accuracy',ja:'加工精度'},value:'±0.003mm'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'P20/H13/S136'},{label:{zh:'硬度',en:'Hardness',ja:'硬度'},value:'HRC28-52'},{label:{zh:'表面粗糙度',en:'Surface Ra',ja:'表面粗さ'},value:'Ra≤0.4μm'}] },
    p4: { icon:'🏗️', title:{zh:'结构件总成',en:'Structural Assembly',ja:'構造体アセンブリ'}, desc:{zh:'各类机械结构件精密加工与装配，包括箱体、支架、底座等，提供完整总成服务和全套检测报告。',en:'Precision machining and assembly for housings, brackets, bases with complete assembly and inspection services.',ja:'ハウジング・ブラケット・ベース等の精密加工・組立、完全アセンブリ・全検査レポート提供。'}, specs:[{label:{zh:'定位精度',en:'Positioning',ja:'位置決め精度'},value:'±0.01mm'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'铸铁/碳钢/不锈钢'},{label:{zh:'最大尺寸',en:'Max Size',ja:'最大サイズ'},value:'1500mm'},{label:{zh:'检测标准',en:'Inspection Standard',ja:'検査基準'},value:'ISO 1101'}] },
    p5: { icon:'💎', title:{zh:'精密法兰盘',en:'Precision Flanges',ja:'精密フランジ'}, desc:{zh:'标准及非标准法兰盘精密加工，平面度≤0.02mm，密封面Ra1.6，满足各类压力等级密封要求。',en:'Standard and non-standard precision flanges with flatness ≤0.02mm and Ra1.6 sealing surface.',ja:'標準・非標準フランジ、平面度≤0.02mm、シール面Ra1.6、各圧力等級対応。'}, specs:[{label:{zh:'平面度',en:'Flatness',ja:'平面度'},value:'≤0.02mm'},{label:{zh:'密封面粗糙度',en:'Sealing Ra',ja:'シール面粗さ'},value:'Ra≤1.6μm'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'304/316不锈钢'},{label:{zh:'压力等级',en:'Pressure Rating',ja:'圧力等級'},value:'PN6-PN160'}] },
    p6: { icon:'🔮', title:{zh:'铝合金壳体',en:'Aluminum Housing',ja:'アルミ合金ハウジング'}, desc:{zh:'航空级铝合金精密壳体，重量轻强度高，阳极氧化或喷砂表面处理，广泛用于电子、仪器仪表。',en:'Aerospace-grade aluminum alloy housings, lightweight and strong, with anodizing or sandblasting finish.',ja:'航空グレードアルミ合金ハウジング、軽量・高強度、陽極酸化またはサンドブラスト表面処理。'}, specs:[{label:{zh:'材质',en:'Material',ja:'材質'},value:'6061/7075-T6'},{label:{zh:'加工精度',en:'Accuracy',ja:'加工精度'},value:'±0.01mm'},{label:{zh:'表面处理',en:'Surface',ja:'表面処理'},value:'阳极氧化/喷砂'},{label:{zh:'最小壁厚',en:'Min Wall',ja:'最小肉厚'},value:'0.5mm'}] },
    p7: { icon:'🛠️', title:{zh:'连接器支架',en:'Connector Brackets',ja:'コネクタブラケット'}, desc:{zh:'各类精密连接器支架，孔位精度高，支持1-100,000件批量，适用于电子、通信、汽车行业。',en:'Precision connector brackets with high hole accuracy, 1-100,000 pcs batch capability for electronics and automotive.',ja:'精密コネクタブラケット、高孔位精度、1-100,000個対応、電子・通信・自動車産業向け。'}, specs:[{label:{zh:'孔位精度',en:'Hole Accuracy',ja:'孔位精度'},value:'±0.02mm'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'铝合金/不锈钢'},{label:{zh:'表面处理',en:'Surface',ja:'表面処理'},value:'氧化/电镀'},{label:{zh:'批量能力',en:'Batch Capability',ja:'バッチ能力'},value:'1-100,000件'}] },
    p8: { icon:'🔑', title:{zh:'精密键槽零件',en:'Keyway Parts',ja:'精密キー溝部品'}, desc:{zh:'精密键槽加工，尺寸精度H7/h6，对称度≤0.02mm，适用于各类传动轴、齿轮键连接零件。',en:'Precision keyway machining with H7/h6 accuracy and symmetry ≤0.02mm for shafts and gears.',ja:'精密キー溝加工、精度H7/h6、対称度≤0.02mm、伝動軸・歯車等のキー接続部品。'}, specs:[{label:{zh:'键槽精度',en:'Keyway Accuracy',ja:'キー溝精度'},value:'H7/h6'},{label:{zh:'对称度',en:'Symmetry',ja:'対称度'},value:'≤0.02mm'},{label:{zh:'材质',en:'Material',ja:'材質'},value:'合金钢/工具钢'},{label:{zh:'热处理硬度',en:'Hardness',ja:'熱処理硬度'},value:'HRC55-62'}] }
};

// ============================================================
//  获取云端图片URL
// ============================================================
function getCloudImageUrl(imageId) {
    try {
        const imgs = JSON.parse(localStorage.getItem('fx_images') || '{}');
        return imgs[imageId] || null;
    } catch(e) {
        return null;
    }
}

// H5端设备ID到云端图片ID的映射
const h5EquipImageMapping = {
    cnc1: 'equip-cnc1', cnc2: 'equip-cnc2', cnc3: 'equip-cnc3',
    wire1: 'equip-wire1', wire2: 'equip-wire2', edm1: 'equip-edm1'
};

// H5端产品ID到云端图片ID的映射
const h5ProductImageMapping = {
    p1: 'prod-1', p2: 'prod-2', p3: 'prod-3', p4: 'prod-4',
    p5: 'prod-5', p6: 'prod-6', p7: 'prod-7', p8: 'prod-8'
};

// ============================================================
//  打开设备模态框
// ============================================================
window.openEquipModal = async function(id) {
    // 先尝试从静态数据加载
    let d = equipData[id];
    
    // 如果静态数据不存在，尝试从 Supabase 动态加载
    if (!d) {
        try {
            const items = await fetchDisplayItems('equipment');
            const item = items.find(i => i.image_key === id);
            if (item) {
                d = {
                    icon: '⚙️',
                    title: { zh: item.title_zh, en: item.title_en || item.title_zh, ja: item.title_ja || item.title_zh },
                    desc: { zh: item.description_zh, en: item.description_en || item.description_zh, ja: item.description_ja || item.description_zh },
                    specs: item.specs || []
                };
            }
        } catch (error) {
            console.error('加载设备详情失败:', error);
        }
    }
    
    if (!d) return;
    
    const lang = currentLang;
    const ld = langs[lang];
    let specsHtml = d.specs.map(s => `
        <div class="modal-spec-row">
            <span class="modal-spec-label">${s.label[lang]||s.label.zh||s.label}</span>
            <span class="modal-spec-val">${s.value}</span>
        </div>`).join('');
    // 尝试加载云端图片
    const cloudImgId = h5EquipImageMapping[id];
    const cloudImgUrl = cloudImgId ? getCloudImageUrl(cloudImgId) : null;
    let imgHtml = '';
    if (cloudImgUrl) {
        imgHtml = `<div class="modal-image" style="width:100%;height:160px;border-radius:10px;overflow:hidden;margin-bottom:12px">
            <img src="${cloudImgUrl}" style="width:100%;height:100%;object-fit:cover" alt="${d.title[lang]||d.title.zh}" onerror="this.parentElement.style.display='none';this.parentElement.nextElementSibling.style.display='block'">
        </div>
        <div class="modal-icon-big" style="display:none">${d.icon}</div>`;
    } else {
        imgHtml = `<div class="modal-icon-big">${d.icon}</div>`;
    }
    document.getElementById('modalTitleText').textContent = d.title[lang]||d.title.zh;
    document.getElementById('modalBody').innerHTML = `
        ${imgHtml}
        <div class="modal-desc">${d.desc[lang]||d.desc.zh}</div>
        <div class="modal-specs">${specsHtml}</div>
        <a href="#message-form" class="btn btn-primary btn-block" onclick="window.closeModal();window.smoothTo('message-form')">
            📩 ${ld['modal-quote']||'获取报价'}
        </a>`;
    window.openModal();
}

// ============================================================
//  打开产品模态框
// ============================================================
window.openProductModal = async function(id) {
    // 先尝试从静态数据加载
    let d = productData[id];
    
    // 如果静态数据不存在，尝试从 Supabase 动态加载
    if (!d) {
        try {
            const items = await fetchDisplayItems('product');
            const item = items.find(i => i.image_key === id);
            if (item) {
                d = {
                    icon: '🔧',
                    title: { zh: item.title_zh, en: item.title_en || item.title_zh, ja: item.title_ja || item.title_zh },
                    desc: { zh: item.description_zh, en: item.description_en || item.description_zh, ja: item.description_ja || item.description_zh },
                    specs: item.specs || []
                };
            }
        } catch (error) {
            console.error('加载产品详情失败:', error);
        }
    }
    
    if (!d) return;
    
    const lang = currentLang;
    const ld = langs[lang];
    let specsHtml = d.specs.map(s => `
        <div class="modal-spec-row">
            <span class="modal-spec-label">${s.label[lang]||s.label.zh||s.label}</span>
            <span class="modal-spec-val">${s.value}</span>
        </div>`).join('');
    // 尝试加载云端图片
    const cloudImgId = h5ProductImageMapping[id];
    const cloudImgUrl = cloudImgId ? getCloudImageUrl(cloudImgId) : null;
    let imgHtml = '';
    if (cloudImgUrl) {
        imgHtml = `<div class="modal-image" style="width:100%;height:160px;border-radius:10px;overflow:hidden;margin-bottom:12px">
            <img src="${cloudImgUrl}" style="width:100%;height:100%;object-fit:cover" alt="${d.title[lang]||d.title.zh}" onerror="this.parentElement.style.display='none';this.parentElement.nextElementSibling.style.display='block'">
        </div>
        <div class="modal-icon-big" style="display:none">${d.icon}</div>`;
    } else {
        imgHtml = `<div class="modal-icon-big">${d.icon}</div>`;
    }
    document.getElementById('modalTitleText').textContent = d.title[lang]||d.title.zh;
    document.getElementById('modalBody').innerHTML = `
        ${imgHtml}
        <div class="modal-desc">${d.desc[lang]||d.desc.zh}</div>
        <div class="modal-specs">${specsHtml}</div>
        <a href="#message-form" class="btn btn-primary btn-block" onclick="window.closeModal();window.smoothTo('message-form')">
            🔧 ${ld['modal-quote']||'询价定制'}
        </a>`;
    window.openModal();
}

// ============================================================
//  模态框控制（H5版）
// ============================================================
let modalTouchHandler = null; // 存储触摸事件处理器，用于移除

window.openModal = function() {
    const overlay = document.getElementById('modalOverlayH5');
    overlay.classList.add('show');
    
    // 移除之前的事件监听器（如果存在）
    if (modalTouchHandler) {
        const handle = document.querySelector('.modal-handle');
        if (handle) {
            handle.removeEventListener('touchstart', modalTouchHandler.onStart);
            handle.removeEventListener('touchmove', modalTouchHandler.onMove);
        }
    }
    
    // 支持下滑关闭 - 只在 handle 区域监听
    let startY = 0;
    let currentY = 0;
    const handle = document.querySelector('.modal-handle');
    
    if (!handle) return;
    
    // 创建事件处理器
    const onStart = function(e) { 
        startY = e.touches[0].clientY;
        currentY = startY;
    };
    
    const onMove = function(e) {
        currentY = e.touches[0].clientY;
        const dy = currentY - startY;
        // 只有向下滑动超过60px才关闭
        if (dy > 60) {
            closeModal();
        }
    };
    
    // 保存引用以便后续移除
    modalTouchHandler = { onStart, onMove };
    
    // 只在 handle 上添加事件监听器，不影响模态框内容的滚动
    handle.addEventListener('touchstart', onStart, { passive: true });
    handle.addEventListener('touchmove', onMove, { passive: true });
}

window.closeModal = function() {
    const overlay = document.getElementById('modalOverlayH5');
    overlay.classList.remove('show');
    
    // 移除事件监听器
    if (modalTouchHandler) {
        const handle = document.querySelector('.modal-handle');
        if (handle) {
            handle.removeEventListener('touchstart', modalTouchHandler.onStart);
            handle.removeEventListener('touchmove', modalTouchHandler.onMove);
        }
        modalTouchHandler = null;
    }
}

window.handleModalClick = function(e) {
    if (e.target === document.getElementById('modalOverlayH5')) closeModal();
}

// ============================================================
//  Toast 提示
// ============================================================
let toastTimer = null;
function showToast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ============================================================
//  留言提交
// ============================================================
const defaultReviews = [
    { name:'张经理', avatar:'张', cls:'ra-blue', company:'成都某汽车公司', date:'2024-01-15', stars:5, text:'合作两年多，复兴机械的加工精度和交货期非常可靠！' },
    { name:'李工程师', avatar:'李', cls:'ra-orange', company:'北京某航空公司', date:'2024-02-20', stars:5, text:'航空铝合金零件一次合格，强烈推荐！' },
    { name:'王总', avatar:'王', cls:'ra-green', company:'重庆某机械公司', date:'2024-03-08', stars:4, text:'线切割精度高，价格合理，性价比很棒！' }
];
let userReviews = [];
const avatarCls = ['ra-blue','ra-orange','ra-green','ra-purple'];

function renderReviews() {
    const all = [...defaultReviews, ...userReviews];
    const html = all.map((r, i) => {
        const stars = '★'.repeat(r.stars) + (r.stars < 5 ? '⭐'.repeat(5 - r.stars) : '');
        return `<div class="review-card">
            <div class="review-quote">"</div>
            <div class="review-header">
                <div class="review-avatar ${r.cls || avatarCls[i % 4]}">${r.avatar}</div>
                <div class="review-meta">
                    <strong>${r.name}</strong>
                    <span>${r.company || ''} · ${r.date}</span>
                </div>
            </div>
            <div class="review-stars">${stars}</div>
            <div class="review-text">${r.text}</div>
        </div>`;
    }).join('');
    document.getElementById('userReviews').innerHTML = html;
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

async function submitMsg(e) {
    e.preventDefault();

    // 防止重复提交：禁用按钮
    const submitBtn = document.querySelector('#msgForm .form-submit');
    if (submitBtn && submitBtn.disabled) return;
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.6';
        submitBtn.style.cursor = 'not-allowed';
        const submittingText = { zh: '⏳ 提交中...', en: '⏳ Submitting...', ja: '⏳ 送信中...' };
        submitBtn.innerHTML = submittingText[currentLang] || submittingText.zh;
    }

    const name = document.getElementById('fName').value.trim();
    const phone = document.getElementById('fPhone').value.trim();
    const content = document.getElementById('fContent').value.trim();
    const typeEl = document.getElementById('fType');
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
    const company = document.getElementById('fCompany').value.trim();
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    userReviews.push({
        name, avatar: name.charAt(0),
        cls: avatarCls[userReviews.length % 4],
        company: company || (langs[currentLang]['nav-message'] || '客户'),
        date, stars: 5, text: content
    });

    // 立即显示成功提示和更新列表，不等待云端
    renderReviews();
    const tip = document.getElementById('successTip');
    tip.classList.add('show');
    setTimeout(() => tip.classList.remove('show'), 4000);
    document.getElementById('msgForm').reset();
    showToast(langs[currentLang]['form-ok'] || '留言成功！');

    // 准备留言数据
    const newMessage = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: '',
        company: company,
        type: typeVal,
        content: content,
        date: date,
        stars: 5,
        status: 'new',
        source: 'h5'
    };
    
    // 后台异步保存到云端（修改后）
    (async function() {
        try {
            if (isCloudConfigured()) {
                // Supabase 模式：直接保存单条留言
                var success = await saveSingleMessageToCloud(newMessage);
                if (success) {
                    console.log('H5留言已成功保存到 Supabase');
                } else {
                    console.warn('H5留言 Supabase 保存失败，已加入重试队列');
                }
            } else {
                // 云端未配置，仅保存到本地
                var _msgs = JSON.parse(localStorage.getItem('fx_messages') || '[]');
                _msgs.unshift(newMessage);
                localStorage.setItem('fx_messages', JSON.stringify(_msgs));
            }
        } catch(error) {
            // 最终兜底：确保本地一定有数据
            console.error('H5留言保存异常:', error);
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
                var btnTexts = { zh: '🚀 提交留言', en: '🚀 Submit', ja: '🚀 送信する' };
                submitBtn.innerHTML = btnTexts[currentLang] || btnTexts.zh;
            }
        }
    })();

    // 滚动到留言墙
    setTimeout(() => smoothTo('reviews-section'), 500);
}

// ============================================================
//  初始化
// ============================================================
window.addEventListener('load', () => {
    // 隐藏启动页
    setTimeout(() => {
        document.getElementById('splash').classList.add('out');
        setTimeout(() => {
            const s = document.getElementById('splash');
            if (s) s.style.display = 'none';
        }, 600);
    }, 2000);
    renderReviews();
    // 初始顶栏透明
    document.getElementById('topbar').classList.add('transparent');
});

// 防止双击缩放
let lastTap = 0;
document.addEventListener('touchend', e => {
    const now = Date.now();
    if (now - lastTap < 300) e.preventDefault();
    lastTap = now;
}, { passive: false });

// ===== 暴露全局函数供 onclick/onsubmit 调用（兼容 Safari 块级函数作用域）=====
window.switchLang       = switchLang;
window.toggleDrawer     = toggleDrawer;
window.closeDrawer      = closeDrawer;
window.tabClick         = tabClick;
// smoothTo 已经在前面定义为 window 属性
window.openEquipModal   = openEquipModal;
window.openProductModal = openProductModal;
// openModal, closeModal, handleModalClick 已经在前面定义为 window 属性
window.showToast        = showToast;
window.submitMsg        = submitMsg;

// ===== 设备和产品动态渲染 (H5版) =====

/**
 * 动态渲染设备中心 (H5)
 */
async function renderH5EquipmentSection() {
    try {
        const items = await fetchDisplayItems('equipment');
        const scroll = document.getElementById('equipScroll');
        
        if (!scroll || items.length === 0) {
            console.log('H5设备数据为空，保持现有HTML');
            return;
        }
        
        const emojiMap = {
            '数控机床': '🤖',
            '线切割': '⚡',
            '其他设备': '🔥'
        };
        
        // 中文tag到英文类别的映射（用于过滤）
        const tagToCategoryMap = {
            '数控机床': 'cnc',
            '线切割': 'wire',
            '其他设备': 'other'
        };
        
        scroll.innerHTML = items.map((item, index) => {
            const tag = item.tags && item.tags.length > 0 ? item.tags[0] : '设备';
            const emoji = emojiMap[tag] || '⚙️';
            const bgClass = `equip-card-img-bg${(index % 6) + 1}`;
            
            // 将中文tag映射为英文类别（用于过滤）
            const category = tagToCategoryMap[tag] || 'other';
            
            // 根据当前语言选择标题和描述
            const title = currentLang === 'zh' ? item.title_zh : (currentLang === 'en' ? (item.title_en || item.title_zh) : (item.title_ja || item.title_zh));
            const desc = currentLang === 'zh' ? (item.description_zh || '') : (currentLang === 'en' ? (item.description_en || item.description_zh || '') : (item.description_ja || item.description_zh || ''));
            
            return `
                <div class="equip-card" data-cat="${category}" onclick="openEquipModal('${item.image_key}')">
                    <div class="equip-card-img ${bgClass}"
                         style="${item.image_url ? `background-image:url('${item.image_url}');background-size:cover;background-position:center` : ''}">
                        <span>${emoji}</span>
                        <span class="equip-card-tag">${tag}</span>
                    </div>
                    <div class="equip-card-body">
                        <div class="equip-card-name">${title}</div>
                        <div class="equip-card-desc">${desc}</div>
                        <div class="equip-card-specs">
                            ${(item.specs || []).slice(0, 2).map(spec => `<span class="spec-chip">${spec.value}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        console.log('H5设备中心已动态渲染，共', items.length, '个设备');
    } catch (error) {
        console.error('渲染H5设备中心失败:', error);
    }
}

/**
 * 动态渲染产品展示 (H5)
 */
async function renderH5ProductsSection() {
    try {
        const items = await fetchDisplayItems('product');
        const grid = document.querySelector('#h5-version .products-grid');
        
        if (!grid || items.length === 0) {
            console.log('H5产品数据为空，保持现有HTML');
            return;
        }
        
        const emojis = ['⚙️', '🔩', '🔧', '🏗️', '💎', '🔮', '🛠️', '🔑'];
        
        grid.innerHTML = items.map((item, index) => {
            const emoji = emojis[index % emojis.length];
            const material = (item.specs || []).map(s => s.value).join(' / ') || '';
            const imgClass = `pc-img-${(index % 8) + 1}`;
            
            // 根据当前语言选择标题
            const title = currentLang === 'zh' ? item.title_zh : (currentLang === 'en' ? (item.title_en || item.title_zh) : (item.title_ja || item.title_zh));
            
            return `
                <div class="product-card" onclick="openProductModal('${item.image_key}')">
                    <div class="product-card-img ${imgClass}"
                         style="${item.image_url ? `background-image:url('${item.image_url}');background-size:cover;background-position:center` : ''}">
                        <span>${emoji}</span>
                        <span class="product-card-label">${(item.specs || [])[0]?.value || ''}</span>
                    </div>
                    <div class="product-card-body">
                        <div class="product-card-name">${title}</div>
                        <div class="product-card-mat">${material}</div>
                        <div class="product-card-action">
                            <span class="product-card-btn">详情 ›</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        console.log('H5产品展示已动态渲染，共', items.length, '个产品');
    } catch (error) {
        console.error('渲染H5产品展示失败:', error);
    }
}

/**
 * 初始化H5动态渲染
 */
async function initH5DynamicContent() {
    // 延迟执行，确保 DOM 完全加载
    setTimeout(async () => {
        await Promise.all([
            renderH5EquipmentSection(),
            renderH5ProductsSection()
        ]);
    }, 600);
}

// H5页面加载完成后初始化动态内容
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initH5DynamicContent);
} else {
    initH5DynamicContent();
}

/* ---------- H5 版脚本 结束 ---------- */
