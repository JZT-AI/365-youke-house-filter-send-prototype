// Report management and material sending extend the existing Youke conversation.
const sbEsc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sbRead = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } };
const sbWrite = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)) } catch {} };
function sbAutoName(type) { const d = new Date(); return type + ' · ' + [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('') + ' ' + [d.getHours(),d.getMinutes(),d.getSeconds()].map(x=>String(x).padStart(2,'0')).join(':') + ' · ' + String(d.getMilliseconds()).padStart(3,'0') }
SB.assets.forEach((a,i) => { a.name = a.type + ' · ' + ['11月17日 09:42','11月17日 09:31','11月17日 08:02','11月16日 17:20'][i] });
SB.assets.push({id:5,name:'图片 · 11月16日 16:06',type:'图片',source:'素材库上传',time:'11-16 16:06',thumb:'thumb-community.jpg'},{id:6,name:'视频 · 11月15日 14:25',type:'视频',source:'素材库上传',time:'11-15 14:25',thumb:'thumb-skyline.jpg'});
SB.assets.push({id:7,name:'视频 · 11月15日 12:20',type:'视频',source:'素材库上传',time:'11-15 12:20',thumb:'thumb-video.jpg'},{id:8,name:'图片 · 11月15日 11:40',type:'图片',source:'素材库上传',time:'11-15 11:40',thumb:'thumb-skyline.jpg'});
const sbHousingSeed=window.HousingDemo.get();
if(sbHousingSeed.houses[3]?.status==='上架'){sbHousingSeed.houses[3].status='下架';window.HousingDemo.save(sbHousingSeed)}
const sbDemoHouses=window.HousingDemo.get().houses;
const sbCurrentAdvisorName='林悦';
const sbDemoVideo = SB.assets.find(asset => asset.type === '视频');
const sbDemoVideos = SB.assets.filter(asset => asset.type === '视频');
SB.communityOptions=window.HousingDemo.get().masterCommunities.map(c=>({name:c.name,district:c.district,block:c.block,aliases:c.aliases}));
const sbModuleTitleDefaults = {房源:'房源推荐',图片:'实景照片',视频:'实拍视频'};
SB.moduleTitles = {...sbModuleTitleDefaults};
const sbSeed = [{
  id: 1,
  title: '西安三房看房参考',
  advisorName: sbCurrentAdvisorName,
  comps: ['房源', '图片', '视频'],
  selected: {
    房源: [sbDemoHouses[0].key, sbDemoHouses[1].key, sbDemoHouses[2].key],
    图片: [SB.assets[0].name, SB.assets[2].name, SB.assets[3].name, SB.assets[7].name],
    视频: [SB.assets[1].name, SB.assets[6].name]
  },
  desc: {
    房源: '按您关注的三房户型，挑了三套不同面积和总价的备选。',
    图片: '',
    视频: ''
  },
  moduleTitles: {...sbModuleTitleDefaults},
  updatedAt: '11-17 10:18'
},{
  id: 2,
  title: '周末看房实景照片',
  advisorName: sbCurrentAdvisorName,
  comps: ['房源', '图片', '视频'],
  selected: {房源: [], 图片: [SB.assets[0].name, SB.assets[2].name], 视频: []},
  desc: {房源: '', 图片: '整理了看房当天拍摄的室内与周边照片。', 视频: ''},
  moduleTitles: {...sbModuleTitleDefaults},
  updatedAt: '11-17 10:06'
},{
  id: 3,
  title: '周末现场讲解视频',
  advisorName: sbCurrentAdvisorName,
  comps: ['房源', '图片', '视频'],
  selected: {房源: [], 图片: [], 视频: [SB.assets[1].name]},
  desc: {房源: '', 图片: '', 视频: '现场实拍，方便您先了解空间与周边。'},
  moduleTitles: {...sbModuleTitleDefaults},
  updatedAt: '11-17 09:52'
},{
  id: 4,
  title: '客户看房备选',
  advisorName: sbCurrentAdvisorName,
  comps: ['房源', '图片', '视频'],
  selected: {房源: [sbDemoHouses[0].key], 图片: [], 视频: []},
  desc: {房源: '', 图片: '', 视频: ''},
  moduleTitles: {...sbModuleTitleDefaults},
  updatedAt: '11-16 18:20'
},{
  id: 5,
  title: '周末看房图文资料',
  advisorName: sbCurrentAdvisorName,
  comps: ['房源', '图片', '视频'],
  selected: {房源: [sbDemoHouses[0].key], 图片: [SB.assets[4].name], 视频: [SB.assets[5].name]},
  desc: {房源: '', 图片: '', 视频: ''},
  moduleTitles: {...sbModuleTitleDefaults},
  updatedAt: '11-16 17:30'
},{
  id: 6,
  title: '城东看房备选',
  advisorName: sbCurrentAdvisorName,
  comps: ['房源', '图片', '视频'],
  selected: {房源: [sbDemoHouses[3].key], 图片: [], 视频: []},
  desc: {房源: '', 图片: '', 视频: ''},
  moduleTitles: {...sbModuleTitleDefaults},
  updatedAt: '11-16 16:40'
}];
SB.reports = sbRead('rt-send:smallb-reports-demo', sbSeed);
try { if(localStorage.getItem('rt-send:smallb-rich-report-example-v2')!=='1'){const index=SB.reports.findIndex(report=>Number(report.id)===1);if(index>=0)SB.reports[index]=sbSeed[0];sbWrite('rt-send:smallb-reports-demo',SB.reports);localStorage.setItem('rt-send:smallb-rich-report-example-v2','1')} } catch {}
try { if(localStorage.getItem('rt-send:smallb-delisted-house-example-v1')!=='1'){if(!SB.reports.some(report=>Number(report.id)===6))SB.reports.push(sbSeed.find(report=>report.id===6));sbWrite('rt-send:smallb-reports-demo',SB.reports);localStorage.setItem('rt-send:smallb-delisted-house-example-v1','1')} } catch {}
try { if(localStorage.getItem('rt-send:smallb-cover-examples-v3')!=='1'){for(const example of sbSeed)if(!SB.reports.some(report=>Number(report.id)===example.id))SB.reports.push(example);sbWrite('rt-send:smallb-reports-demo',SB.reports);localStorage.setItem('rt-send:smallb-cover-examples-v3','1')} } catch {}
try {
  if (localStorage.getItem('rt-send:smallb-cover-examples-seeded') !== '1') {
    for (const example of sbSeed) if (!SB.reports.some(report => Number(report.id) === example.id)) SB.reports.push(example);
    sbWrite('rt-send:smallb-reports-demo', SB.reports);
    localStorage.setItem('rt-send:smallb-cover-examples-seeded', '1');
  }
} catch {}
SB.editId = null; SB.pickSelected = new Set(); SB.reportDirty = false;
SB.disclaimerChecked = true; SB.helpHtml = '<p>常用的房源照片、讲解视频，可以先放进「我的素材」。上传后，组报告时随时能用。</p><p>在「我的报告」整理好客户关心的内容；和客户聊天时，从「发送资料」挑素材或报告发给他。</p>';
SB.noticeHtml = '<p>请确认上传内容真实、合法且具有使用权。请勿上传侵权或违法内容。</p>';
try { SB.helpHtml=localStorage.getItem('rt-send:smallb-config-help')||SB.helpHtml; SB.noticeHtml=localStorage.getItem('rt-send:smallb-config-notice')||SB.noticeHtml } catch {}
function sbSnapshot(id) { const types=['房源','图片','视频'];return {id,title:SB.title.trim(),advisorName:SB.advisorName||sbCurrentAdvisorName,comps:SB.comps.filter(type=>types.includes(type)),selected:Object.fromEntries(types.map(type=>[type,[...(SB.selected[type]||[])]])),desc:Object.fromEntries(types.map(type=>[type,SB.desc[type]||''])),moduleTitles:Object.fromEntries(types.map(type=>[type,SB.moduleTitles[type]||sbModuleTitleDefaults[type]])),updatedAt:sbTime()} }
function sbLoadReport(report) { const types=['房源','图片','视频'];SB.editId=report.id; SB.title=report.title; SB.advisorName=report.advisorName||sbCurrentAdvisorName; SB.comps=report.comps.filter(type=>types.includes(type)); SB.selected=Object.fromEntries(types.map(type=>[type,[...(report.selected[type]||[])]])); SB.desc=Object.fromEntries(types.map(type=>[type,report.desc[type]||''])); SB.moduleTitles=Object.fromEntries(types.map(type=>[type,report.moduleTitles?.[type]||sbModuleTitleDefaults[type]])); SB.reportDirty=false; SB.disclaimerChecked=true }
function sbNewReport() { SB.editId=null; SB.title=''; SB.advisorName=sbCurrentAdvisorName; SB.comps=['房源','图片','视频']; SB.selected={房源:[],图片:[],视频:[]}; SB.desc={房源:'',图片:'',视频:''}; SB.moduleTitles={...sbModuleTitleDefaults}; SB.reportDirty=false; SB.disclaimerChecked=true; go('sbReport') }
function sbSaveReport() { const id=SB.editId ?? Date.now(); const item=sbSnapshot(id); const ix=SB.reports.findIndex(r=>r.id===id); if(ix<0) SB.reports.unshift(item); else SB.reports[ix]=item; SB.editId=id; SB.reportDirty=false; sbWrite('rt-send:smallb-reports-demo',SB.reports) }
const sbBasePage = sbPage;
sbPage = function(title,body) { return screen('<div class="sb-body">'+body+'</div>', title, {right:['功能说明','素材免责须知','选择素材','选择报告'].includes(title)?'':'<button class="sb-header-help" data-rpt="help" aria-label="功能说明">'+sbHelpIcon+'<span>说明</span></button>'}) };
const sbHelpIcon='<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 0 1 4.8 1c0 1.8-2.4 2-2.4 3.7M12 17h.01"/></svg>';
function sbMediaPreview(a) { return a.type==='视频'&&a.thumb?.startsWith('blob:')?'<video src="'+sbEsc(a.thumb)+'" muted preload="metadata"></video>':'<img src="'+sbEsc(a.thumb)+'" alt="">' }
function sbHouseInfo(value){const h=window.HousingDemo?.get().houses.find(x=>x.key===value||x.title===value);if(h)return {title:h.title,meta:[h.room+'室2厅',h.area+'㎡',window.HousingDemo.communityDisplayName(h)].join(' · '),thumb:h.source==='安居客'?'thumb-skyline.jpg':'thumb-living.jpg'};return {title:value,meta:value.includes('112')?'112㎡ · 河西花园':'89㎡ · 河西花园',thumb:value.includes('112')?'thumb-skyline.jpg':'thumb-living.jpg'}}
function sbItemInfo(type,value){if(type==='房源')return sbHouseInfo(value);if(type==='小区'){const c=SB.communityOptions.find(x=>x.name===value);return {title:value,meta:c?[c.district,c.block].join(' · '):'',thumb:'thumb-community.jpg'}}const a=SB.assets.find(x=>x.name===value);return {title:type==='视频'?'视频素材':'图片素材',meta:a?.time||'',thumb:a?.thumb||(type==='视频'?'thumb-video.jpg':'thumb-skyline.jpg')}}
function sbHouseDelisted(value){const house=window.HousingDemo.get().houses.find(item=>item.key===value||item.title===value);return ['下架','疑似下架'].includes(house?.status)}
function sbCompactItem(type,value){const asset=SB.assets.find(a=>a.type===type&&a.name===value),disabled=asset&&sbAssetDisabled(asset);const item=sbItemInfo(type,value),thumb=item.thumb,delisted=type==='房源'&&sbHouseDelisted(value),cover=disabled?'<span class="sb-compact-disabled">!</span>':type==='视频'&&thumb.startsWith('blob:')?'<video src="'+sbEsc(thumb)+'" muted preload="metadata"></video>':'<img src="'+sbEsc(thumb)+'" alt="">';return '<div class="sb-compact-item'+(disabled?' sb-compact-unavailable':'')+'"><span class="sb-compact-photo">'+cover+(delisted?'<span class="sb-compact-delisted">下架</span>':'')+(disabled?'':type==='视频'?'<em>▶</em>':type==='房源'||type==='小区'?'<em>'+type+'</em>':'')+'<button data-sb="remove:'+sbEsc(type)+':'+sbEsc(value)+'" aria-label="移除'+(disabled?'不可用素材':sbEsc(item.title))+'">×</button></span><strong title="'+(disabled?'素材暂不可用':sbEsc(item.title))+'">'+(disabled?'素材暂不可用':sbEsc(item.title))+'</strong><small>'+(disabled?'请移除后重新选择':sbEsc(item.meta))+'</small></div>'}
function sbSmallIcon(type){const paths={房源:'<path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-7h6v7"/>',小区:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h2m4 0h2M8 12h2m4 0h2M10 21v-5h4v5"/>',图片:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-4 5 6"/>',视频:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m10 8 6 4-6 4z"/>'};return '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[type]+'</svg>'}
const sbGripIcon='<svg viewBox="0 0 18 24" width="18" height="24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="5" r="1.5"/><circle cx="13" cy="5" r="1.5"/><circle cx="5" cy="12" r="1.5"/><circle cx="13" cy="12" r="1.5"/><circle cx="5" cy="19" r="1.5"/><circle cx="13" cy="19" r="1.5"/></svg>';
sbComponent = function(type,index) { const count=SB.selected[type].length, description=SB.desc[type], title=SB.moduleTitles[type]||sbModuleTitleDefaults[type];return '<section class="sb-component" data-sb-component="'+index+'"><div class="sb-component-head"><span class="sb-component-icon">'+sbSmallIcon(type)+'</span><button class="sb-module-title" data-sb="desc:'+type+'" aria-label="编辑'+type+'模块标题和文字描述"><strong>'+sbEsc(title)+'</strong><small>'+type+'</small></button><span class="sb-component-count">已选 '+count+'</span><span class="sb-drag" data-sb-drag="'+index+'" title="按住拖动调整顺序" aria-label="拖动'+type+'组件">'+sbGripIcon+'</span></div><div class="sb-compact-strip">'+(count?SB.selected[type].map(value=>sbCompactItem(type,value)).join(''):'<span class="sb-component-empty">还没有添加'+type+'</span>')+'</div><div class="sb-component-actions"><button class="sb-addmaterial" data-sb="select:'+type+'"><span>＋</span>添加'+type+'</button><button class="sb-describe" data-sb="desc:'+type+'">'+(description?sbEsc(description):'编辑标题与添加模块文字描述')+'<span>✎</span></button></div></section>' };
pages.sbReport = () => {if(SB.editId&&sbReportDirectlyDisabled(SB.reports.find(report=>report.id===SB.editId)))return sbPage('编辑报告','<div class="sb-editor-unavailable"><span class="sb-unavailable-symbol">!</span><h3>报告暂不可用</h3><p>该报告因「'+sbEsc(sbBanReason('report',SB.editId))+'」暂不可用，如有疑问可咨询客服</p><button data-rpt="unavailable:report:'+SB.editId+'">了解详情或咨询客服</button><button class="sb-editor-delete" data-rpt="delete:'+SB.editId+'">删除报告</button></div>');return sbPage(SB.editId?'编辑报告':'组装报告','<label class="sb-label">报告标题<input id="sb-title" value="'+sbEsc(SB.title)+'" placeholder="输入报告标题"></label><small class="sb-title-limit">最多20字</small><p class="sb-report-note">模块标题可修改；没有添加素材和描述的模块，客户不会看到。</p><div class="sb-component-stack">'+SB.comps.map(sbComponent).join('')+'</div><div class="sb-savebar"><label class="sb-disclaimer"><input id="sb-notice-check" type="checkbox" '+(SB.disclaimerChecked?'checked':'')+'>已阅读并同意 <button type="button" data-rpt="notice">365有客App素材免责须知</button></label><button class="sb-save-button" data-rpt="save">保存报告</button><div class="sb-inlineerror" id="sb-error"></div></div>')};
function sbReportActionIcon(kind){const shapes={preview:'<path d="M2.5 12s3.4-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.4 5.5-9.5 5.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.5"/>',edit:'<path d="m4 16.5 11-11 3.5 3.5-11 11L4 20zM13.5 7l3.5 3.5M4 20h16"/>',delete:'<path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 10v7M14 10v7"/>'};return '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+shapes[kind]+'</svg>'}
const sbReportCoverIcon='<svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="10" y="6" width="28" height="36" rx="5"/><path d="M16 16h16M16 23h16M16 30h9"/><path d="m28 32 3-3 3 3"/></svg>';
try {
  if(localStorage.getItem('rt-send:smallb-app-availability-examples-v2')!=='1'){
    ReportPrototype.setDisabled('asset-6',true);
    sbWrite('rt-send:demo-disabled-reports',[...new Set([...sbRead('rt-send:demo-disabled-reports',[]).filter(id=>id!=='R002'),'R004'])]);
    localStorage.removeItem('rt-send:demo-disabled-report-2');
    localStorage.setItem('rt-send:smallb-app-availability-examples-v2','1');
  }
} catch {}
try { if(localStorage.getItem('rt-send:smallb-report-states-demo-v4')!=='1'){if(!SB.reports.some(report=>Number(report.id)===4)){SB.reports.push(sbSeed.find(report=>report.id===4));sbWrite('rt-send:smallb-reports-demo',SB.reports)}sbWrite('rt-send:demo-disabled-reports',[...new Set([...sbRead('rt-send:demo-disabled-reports',[]),'R004'])]);localStorage.setItem('rt-send:smallb-report-states-demo-v4','1')} } catch {}
try {
  if(localStorage.getItem('rt-send:smallb-report-examples-v5')!=='1'){
    for(const example of sbSeed){
      const index=SB.reports.findIndex(report=>Number(report.id)===example.id);
      if(index<0)SB.reports.push(example);
      else SB.reports[index]=example;
    }
    sbWrite('rt-send:smallb-reports-demo',SB.reports);
    sbWrite('rt-send:demo-disabled-reports',['R004']);
    for(const id of [1,2,3])localStorage.removeItem('rt-send:demo-disabled-report-'+id);
    localStorage.removeItem('rt-send:youke-assets-deleted:asset-6');
    ReportPrototype.setDisabled('asset-6',true);
    localStorage.setItem('rt-send:smallb-report-examples-v5','1');
  }
} catch {}
try {
  if(localStorage.getItem('rt-send:smallb-report-examples-v7')!=='1'){
    for(const example of sbSeed){
      const index=SB.reports.findIndex(report=>Number(report.id)===example.id);
      if(index<0)SB.reports.push(example);
      else SB.reports[index]=example;
    }
    sbWrite('rt-send:smallb-reports-demo',SB.reports);
    sbWrite('rt-send:demo-disabled-reports',['R004']);
    for(const id of [1,2,3,5])localStorage.removeItem('rt-send:demo-disabled-report-'+id);
    for(const id of [1,2,3,4]){
      localStorage.removeItem('rt-send:youke-assets-deleted:asset-'+id);
      ReportPrototype.setDisabled('asset-'+id,false);
    }
    for(const id of [5,6]){
      localStorage.removeItem('rt-send:youke-assets-deleted:asset-'+id);
      ReportPrototype.setDisabled('asset-'+id,true);
    }
    localStorage.setItem('rt-send:smallb-report-examples-v7','1');
  }
} catch {}
function sbAssetDisabled(asset){return !!asset&&ReportPrototype.isDisabled(sbAssetRef(asset))}
function sbReportDirectlyDisabled(report){const refs={1:'R002',2:'R001',3:'R003'};return !!report&&(sbRead('rt-send:demo-disabled-reports',[]).includes(refs[report.id]||'R'+String(report.id).padStart(3,'0'))||!!localStorage.getItem('rt-send:demo-disabled-report-'+report.id))}
function sbReportHasDisabledAsset(report){return !!report&&['图片','视频'].some(type=>(report.selected?.[type]||[]).some(value=>sbAssetDisabled(SB.assets.find(item=>item.type===type&&item.name===value))))}
function sbReportHasDelistedHouse(report){const houses=window.HousingDemo.get().houses;return !!report&&(report.selected?.房源||[]).some(value=>['下架','疑似下架'].includes(houses.find(item=>item.key===value||item.title===value)?.status))}
function sbReportUnavailable(report){return !report||sbReportDirectlyDisabled(report)||sbReportHasDisabledAsset(report)||sbReportHasDelistedHouse(report)}
function sbReportEnabled(report){return !sbReportUnavailable(report)}
const sbDemoBanReasons={asset:{5:'图片内容不适合展示',6:'视频内容不适合展示'},report:{4:'报告内容不适合展示'}};
function sbBanReason(kind,id){
  const reportRefs={1:'R002',2:'R001',3:'R003'};
  const target=kind==='report'?(reportRefs[id]||'R'+String(id).padStart(3,'0')):'asset-'+id;
  const records=sbRead('rt-send:demo-availability-actions',[]);
  const label=kind==='report'?'报告':'素材';
  const latest=records.find(item=>item.kind===label&&item.id===target&&item.action==='禁用');
  return latest?.reason||sbDemoBanReasons[kind]?.[id]||'内容不适合展示';
}
function sbReportSummary(report) {
  const units = {房源:'套', 图片:'张', 视频:'个'};
  return ['房源','图片','视频'].filter(type=>report.comps.includes(type)).map(type=>{
    const count=(report.selected[type]||[]).length;
    return count ? type+' '+count+units[type] : '';
  }).filter(Boolean).join(' · ') || '添加内容后可发给客户';
}
function sbReportTile(report,send=false) {
  const selecting=!send&&SB.selectionMode==='reports';
  const on=send?SB.chatReportPick.has(report.id):SB.batchReports?.has(String(report.id));
  if(sbReportDirectlyDisabled(report))return '<article class="sb-report-tile sb-report-unavailable" data-report-id="'+report.id+'"><div class="sb-report-tile-top">'+(selecting?'<button class="sb-report-select '+(on?'on':'')+'" data-rpt="toggleBatchReport:'+report.id+'" aria-label="选择不可用报告" aria-pressed="'+!!on+'">'+(on?'✓':'')+'</button>':'')+'<button class="sb-unavailable-report-top" data-rpt="unavailable:report:'+report.id+'"><span class="sb-report-icon sb-report-icon-unavailable">!</span><span class="sb-report-tile-copy"><strong>报告暂不可用</strong><small>'+sbEsc(report.updatedAt)+' 更新</small></span><em>›</em></button></div><p title="'+sbEsc(sbBanReason('report',report.id))+'">'+sbEsc(sbBanReason('report',report.id))+'</p>'+(send||selecting?'':'<div class="sb-report-actions"><button disabled>'+sbReportActionIcon('preview')+'预览</button><button disabled>'+sbReportActionIcon('edit')+'编辑</button><button class="delete" data-rpt="delete:'+report.id+'">'+sbReportActionIcon('delete')+'删除</button></div>')+'</article>';
  const summary=sbReportSummary(report),affected=sbReportHasDisabledAsset(report),delisted=sbReportHasDelistedHouse(report),blocked=affected||delisted;
  const content='<div class="sb-report-tile-top">'+(selecting?'<button class="sb-report-select '+(on?'on':'')+'" data-rpt="toggleBatchReport:'+report.id+'" aria-label="选择'+sbEsc(report.title)+'" aria-pressed="'+!!on+'">'+(on?'✓':'')+'</button>':'')+'<span class="sb-report-icon">'+sbReportCoverIcon+'</span><div class="sb-report-tile-copy"><strong>'+sbEsc(report.title)+'</strong><small>'+sbEsc(report.updatedAt)+' 更新</small></div>'+(send&&!blocked?'<span class="sb-report-choice-mark '+(on?'on':'')+'" aria-hidden="true">'+(on?'✓':'')+'</span>':'')+'</div><p>'+sbEsc(summary)+'</p>'+(affected?'<p class="sb-report-affected-note">部分素材暂不可用，请编辑替换后发送</p>':'')+(delisted?'<p class="sb-report-affected-note">含失效房源，请编辑替换后发送</p>':'');
  if(send&&blocked)return '<article class="sb-report-tile sb-report-affected" data-report-id="'+report.id+'">'+content+'</article>';
  return '<article class="sb-report-tile '+(send?'send ':'')+(on?'selected':'')+'" data-report-id="'+report.id+'"'+(send&&SB.chatReportQuery&&!report.title.toLowerCase().includes(SB.chatReportQuery.toLowerCase())?' hidden':'')+'>'+(send?'<button class="sb-report-card-select" data-rpt="chooseChatReport:'+report.id+'" aria-label="选择报告 '+sbEsc(report.title)+'" aria-pressed="'+!!on+'">'+content+'</button>':content+(selecting?'':'<div class="sb-report-actions"><button data-rpt="preview:'+report.id+'">'+sbReportActionIcon('preview')+'预览</button><button class="edit" data-rpt="edit:'+report.id+'">'+sbReportActionIcon('edit')+'编辑</button><button class="delete" data-rpt="delete:'+report.id+'" aria-label="删除'+sbEsc(report.title)+'">'+sbReportActionIcon('delete')+'删除</button></div>'))+'</article>';
}

pages.sbPackages=()=>sbPage('我的报告','<div class="sb-list-heading"><div><strong>我的报告</strong><small>'+SB.reports.length+' 份报告</small></div><button data-rpt="new">＋ 新建报告</button></div><div class="sb-query"><span>⌕</span><input id="sb-report-query" placeholder="按报告标题搜索" autocomplete="off"></div><div id="sb-report-list">'+(SB.reports.length?SB.reports.map(r=>sbReportTile(r)).join(''):'<div class="sb-emptybox">暂无报告<br><button data-rpt="new">新建报告</button></div>')+'</div>');
Object.assign(meta,{sbHelp:['功能说明','',[],''],sbNotice:['素材免责须知','',[],'']});
pages.sbHelp=()=>sbPage('功能说明','<div class="sb-info-page"><div class="sb-rich-copy">'+sbSafeRich(SB.helpHtml)+'</div><button data-rpt="infoBack">返回</button></div>');
pages.sbNotice=()=>sbPage('素材免责须知','<div class="sb-info-page"><div class="sb-rich-copy">'+sbSafeRich(SB.noticeHtml)+'</div><button data-rpt="infoBack">返回组装报告</button></div>');
SB.infoReturn='sbReport';
function sbOpenSendSheet(mode='choice'){
  const holder=document.getElementById('sheet');
  const body='<button class="sb-choice-card" data-rpt="chatMaterials"><span class="sb-choice-icon">▧</span><span><b>发送素材</b><small>从素材库挑选照片或视频</small></span><em>›</em></button><button class="sb-choice-card" data-rpt="chatReports"><span class="sb-choice-icon">▤</span><span><b>发送报告</b><small>选择已整理好的报告</small></span><em>›</em></button>';
  holder.innerHTML='<div class="sheet sb-send-sheet"><div class="sb-send-sheet-head"><button data-rpt="closeSendSheet" aria-label="关闭">×</button><h4>发送资料</h4><span></span></div><div class="sb-send-sheet-body">'+body+'</div></div>';
  holder.classList.add('on');
}
Object.assign(meta,{sbChatPicker:['发送资料','',[],''],sbChatMaterials:['选择素材','',[],''],sbChatReports:['选择报告','',[],'']});
pages.sbChatPicker=()=>sbPage('发送资料','<div class="sb-choice-intro">这次想给客户看什么？</div><button class="sb-choice-card" data-rpt="chatMaterials"><span class="sb-choice-icon">▧</span><span><b>发送素材</b><small>挑几张照片或视频，直接发给客户</small></span><em>›</em></button><button class="sb-choice-card" data-rpt="chatReports"><span class="sb-choice-icon">▤</span><span><b>发送报告</b><small>把整理好的房源资料发给客户</small></span><em>›</em></button>');
// Source filters share the original first-collection source; switching never clears selections.
SB.sourceFilters={library:'全部',chat:'全部',图片:'全部',视频:'全部'};
function sbMatchesSource(asset,context){const filter=SB.sourceFilters[context]||'全部';return filter==='全部'||asset.source===(filter==='素材上传'?'素材库上传':'会话发送')}
function sbSourceFilters(context){return '<div class="sb-chat-filter sb-source-filter" aria-label="收录来源">'+['全部','素材上传','会话收录'].map(label=>'<button class="'+(SB.sourceFilters[context]===label?'on':'')+'" aria-pressed="'+(SB.sourceFilters[context]===label)+'" data-rpt="sourceFilter:'+context+':'+label+'">'+(label==='全部'?'全部来源':label)+'</button>').join('')+'</div>'}
SB.chatMaterialPick=new Set(); SB.sentAssetIds=[]; SB.chatMaterialFilter='全部';  SB.chatReportQuery=''; SB.chatReportPick=new Set();
pages.sbChatMaterials=()=>{const list=SB.assets.filter(sbAvailableAsset).filter(a=>sbMatchesSource(a,'chat')).filter(a=>SB.chatMaterialFilter==='全部'||a.type===SB.chatMaterialFilter);return sbPage('选择素材','<div class="sb-choice-header"><span>从素材库挑选照片或视频</span><button data-rpt="goUpload:chat">去上传</button></div>'+sbSourceFilters('chat')+'<div class="sb-chat-filter sb-type-filter" aria-label="素材类型">'+['全部','图片','视频'].map(type=>'<button class="'+(SB.chatMaterialFilter===type?'on':'')+'" aria-pressed="'+(SB.chatMaterialFilter===type)+'" data-rpt="chatMaterialFilter:'+type+'">'+(type==='全部'?'全部类型':type)+'</button>').join('')+'</div><div id="sb-chat-material-list" class="sb-media-grid">'+list.map(a=>'<button class="sb-media-choice '+(SB.chatMaterialPick.has(a.id)?'on':'')+'" data-rpt="toggleChatAsset:'+a.id+'"><span class="sb-media-photo">'+sbMediaPreview(a)+(a.type==='视频'?'<em>▶</em>':'')+'</span><span class="sb-media-check">'+(SB.chatMaterialPick.has(a.id)?'✓':'')+'</span><small>'+a.type+' · '+sbEsc(a.time)+'</small></button>').join('')+'</div>'+(!list.length?'<div class="sb-emptybox">暂无可选素材</div>':'')+'<div class="sb-fixed-action"><button data-rpt="sendAssets" '+(!SB.chatMaterialPick.size?'disabled':'')+'>发送已选素材（'+SB.chatMaterialPick.size+'）</button></div>')};
function sbSearchableReportTitle(report){return sbReportDirectlyDisabled(report)?'报告暂不可用':report.title}
pages.sbChatReports=()=>{const q=SB.chatReportQuery.toLowerCase();const reports=SB.reports.filter(r=>sbSearchableReportTitle(r).toLowerCase().includes(q));return sbPage('选择报告','<div class="sb-choice-header"><span>选择已整理好的报告，可多选</span><button data-rpt="newFromChat">新建报告</button></div><div class="sb-query"><span>⌕</span><input id="sb-chat-report-query" placeholder="搜索报告标题" value="'+sbEsc(SB.chatReportQuery)+'" autocomplete="off"></div><div id="sb-chat-report-list">'+reports.map(r=>sbReportTile(r,true)).join('')+'</div><div id="sb-chat-report-empty" class="sb-emptybox" '+(reports.length?'hidden':'')+'>没有匹配的报告</div><div class="sb-fixed-action"><button data-rpt="confirmChatReport" '+(!SB.chatReportPick.size?'disabled':'')+'>发送所选报告（'+SB.chatReportPick.size+'）</button></div>')};
SB.libraryTab='assets'; SB.selectionMode=''; SB.batchAssets=new Set(); SB.batchReports=new Set(); SB.reportQuery='';
function sbLibraryBatchBar(){const count=SB.selectionMode==='assets'?SB.batchAssets.size:SB.batchReports.size;return '<div class="sb-batch-bar"><span>已选 '+count+' 项</span><button data-rpt="batchDelete" '+(count?'':'disabled')+'>删除所选</button></div>'}
pages.sbLibrary=()=>{
 const assetsTab=SB.libraryTab==='assets';
 const tabs='<div class="sb-library-tabs"><button data-rpt="libraryTab:assets" class="'+(assetsTab?'on':'')+'">我的素材</button><button data-rpt="libraryTab:reports" class="'+(!assetsTab?'on':'')+'">我的报告</button></div>';
 const selection=SB.selectionMode===(assetsTab?'assets':'reports');
 const choose='<button class="sb-select-mode" data-rpt="'+(selection?'cancelBatch':'startBatch')+'">'+(selection?'取消':'选择')+'</button>';
 const sourceAssets=SB.assets.filter(a=>!ReportPrototype.isDeleted(sbAssetRef(a))&&sbMatchesSource(a,'library'));
 const assetView=sbUploadActions()+'<input id="sb-file" type="file" accept="image/*,video/*" multiple hidden><div class="sb-batch-heading"><strong>我的素材</strong>'+choose+'</div>'+sbSourceFilters('library')+(sourceAssets.length?sbAssetRows(sourceAssets.sort((a,b)=>Number(sbAssetDisabled(b))-Number(sbAssetDisabled(a)))):'<div class="sb-emptybox">该分类暂无素材</div>')+(selection?sbLibraryBatchBar():'');
 const reportView='<div class="sb-report-create"><button class="sb-new-report" data-rpt="new"><span class="sb-entry-icon" aria-hidden="true">＋</span><span class="sb-entry-copy"><strong>新建报告</strong><small>选房源、照片和视频，整理给客户看</small></span><span class="sb-entry-chevron" aria-hidden="true">›</span></button></div><div class="sb-batch-heading"><strong>我的报告</strong>'+choose+'</div><div class="sb-query"><span>⌕</span><input id="sb-report-query" placeholder="按报告标题搜索" autocomplete="off" value="'+sbEsc(SB.reportQuery)+'"></div><div id="sb-report-list">'+(SB.reports.length?SB.reports.filter(r=>!SB.reportQuery||sbSearchableReportTitle(r).toLowerCase().includes(SB.reportQuery.toLowerCase())).map(r=>sbReportTile(r)).join(''):'<div class="sb-emptybox">暂无报告<br><button data-rpt="new">新建报告</button></div>')+'</div>'+(selection?sbLibraryBatchBar():'');
 return sbPage('资料库',tabs+(assetsTab?assetView:reportView));
};

SB.pickerReturn='sbReport'; SB.pickQuery=''; SB.newFromChat=false; SB.housePickerMode=false; SB.housePick=new Set();

function sbAssetRef(asset) { return asset ? 'asset-' + asset.id : undefined; }
function sbAvailableAsset(asset) { return !!asset && !ReportPrototype.isDeleted(sbAssetRef(asset)) && !sbAssetDisabled(asset); }
const sbOriginalAssetDetail=pages.sbAsset;
pages.sbAsset=()=>{const asset=SB.assets.find(a=>a.id===SB.viewAsset);return sbAssetDisabled(asset)?sbPage('素材详情','<div class="sb-emptybox">素材暂不可用<br><button data-rpt="unavailable:asset:'+asset.id+'">咨询客服</button></div>'):sbOriginalAssetDetail()};
sbAssetRows=function(list){return list.map(a=>{
  const selecting=SB.selectionMode==='assets',on=SB.batchAssets?.has(String(a.id)),disabled=sbAssetDisabled(a);
  const main=disabled
    ? '<span class="sb-thumb sb-thumb-unavailable">!</span><span class="sb-assetmain"><strong>素材暂不可用</strong><small title="'+sbEsc(sbBanReason('asset',a.id))+'">'+sbEsc(sbBanReason('asset',a.id))+'</small></span>'
    : '<span class="sb-thumb">'+sbMediaPreview(a)+'</span><span class="sb-assetmain"><strong>'+sbEsc(a.name)+'</strong><small>'+sbEsc(a.type)+' · '+sbEsc(a.source)+' · '+sbEsc(a.time||'刚刚')+'</small></span>';
  const view='<button class="sb-asset '+(selecting?'selecting ':'')+(on?'selected':'')+(disabled?' sb-asset-unavailable':'')+'" '+(selecting?'data-rpt="toggleBatchAsset:'+a.id+'" aria-pressed="'+!!on+'"':disabled?'data-rpt="unavailable:asset:'+a.id+'"':'data-sb="asset:'+a.id+'"')+'><span class="sb-asset-select" aria-hidden="true">'+(on?'✓':'')+'</span>'+main+'</button>';
  return '<div class="sb-asset-row">'+view+(selecting?'':'<button class="sb-asset-delete" data-rpt="deleteAsset:'+a.id+'" aria-label="删除'+(disabled?'不可用素材':sbEsc(a.name))+'">'+sbReportActionIcon('delete')+'<span>删除</span></button>')+'</div>';
}).join('')};
function sbOpenUnavailable(kind,id){const holder=document.getElementById('sheet'),report=kind==='report',reason=sbEsc(sbBanReason(kind,id));holder.innerHTML='<div class="sheet sb-unavailable-sheet"><span class="sb-unavailable-symbol">!</span><h4>'+(report?'报告':'素材')+'暂不可用</h4><p>该'+(report?'报告':'素材')+'因「'+reason+'」暂不可用，如有疑问可咨询客服</p><div class="sb-unavailable-dialog-actions"><button data-close-sheet>知道了</button><button data-h-consult="">咨询客服</button></div></div>';holder.classList.add('on')}

function sbDeleteSelected(){
  if(SB.selectionMode==='assets'){
    const selected=SB.assets.filter(a=>SB.batchAssets.has(String(a.id))&&!ReportPrototype.isDeleted(sbAssetRef(a)));
    if(!selected.length||!confirm('删除选中的 '+selected.length+' 条素材？删除后无法再选用，已发送的报告不受影响。'))return;
    const failed=selected.filter(a=>!ReportPrototype.setDeleted(sbAssetRef(a)));
    if(failed.length){alert('部分素材删除未完成，请重试');return}
    SB.batchAssets.clear();SB.selectionMode='';go('sbLibrary',false);showToast('已删除 '+selected.length+' 条素材');return;
  }
  if(SB.selectionMode==='reports'){
    const selected=SB.reports.filter(r=>SB.batchReports.has(String(r.id)));
    if(!selected.length||!confirm('删除选中的 '+selected.length+' 份报告？'))return;
    SB.reports=SB.reports.filter(r=>!SB.batchReports.has(String(r.id)));
    sbWrite('rt-send:smallb-reports-demo',SB.reports);
    SB.batchReports.clear();SB.selectionMode='';go('sbLibrary',false);showToast('已删除 '+selected.length+' 份报告');
  }
}

function sbCurrentReportSnapshot(report){return structuredClone(report)}
function sbPreviewReport(id){const report=SB.reports.find(r=>r.id===Number(id));if(!report)return;if(sbReportDirectlyDisabled(report)){sbOpenUnavailable('report',report.id);return}showToast('原型示意：打开淘房小程序专属报告')}
const sbNativeHousingAll=pages.housingAll;
pages.housingAll=()=>{const html=sbNativeHousingAll();if(!SB.housePickerMode)return html;const template=document.createElement('template');template.innerHTML=html;template.content.querySelector('[data-rt-picker-hint]')?.remove();const back=template.content.querySelector('.h-head [data-h-go]');if(back){back.removeAttribute('data-h-go');back.dataset.rpt='houseBack'}const right=template.content.querySelector('.h-head .h-picker-upload-entry');if(right){const spacer=document.createElement('span');spacer.style.cssText='width:44px;flex:none';spacer.setAttribute('aria-hidden','true');right.replaceWith(spacer)}const footer=template.content.querySelector('[data-h-send-selected]');if(footer){footer.removeAttribute('data-h-send-selected');footer.dataset.rpt='houseConfirm';footer.textContent='加入报告（'+SB.housePick.size+'）';footer.disabled=!SB.housePick.size}template.content.querySelectorAll('[data-h-pick]').forEach(row=>{const mark=row.querySelector('.h-select-mark'),on=SB.housePick.has(row.dataset.hPick);mark.classList.toggle('on',on);mark.textContent=on?'✓':''});return template.innerHTML};
function sbOpenHousePicker(){const state=window.HousingDemo.get();SB.housePick=new Set(SB.selected.房源.map(value=>state.houses.find(h=>h.key===value||h.title===value)?.key).filter(Boolean));SB.housePickerMode=true;go('housingAll')}
function sbConfirmHousePicker(){const state=window.HousingDemo.get(),valid=[...SB.housePick].filter(key=>{const h=state.houses.find(x=>x.key===key);return h&&window.HousingDemo.allowed(state,h)&&(h.status||'上架')==='上架'});if(!valid.length)return;if(valid.length>20){showToast('房源最多选20条');return}SB.selected.房源=valid;SB.reportDirty=true;SB.housePickerMode=false;go('sbReport')}
window.addEventListener('click',e=>{if(!SB.housePickerMode||current!=='housingAll')return;const row=e.target.closest('[data-h-pick]');if(!row)return;e.preventDefault();e.stopImmediatePropagation();const key=row.dataset.hPick;if(!SB.housePick.has(key)&&SB.housePick.size>=20){showToast('每类最多选20条');return}SB.housePick.has(key)?SB.housePick.delete(key):SB.housePick.add(key);const on=SB.housePick.has(key),mark=row.querySelector('.h-select-mark');mark.classList.toggle('on',on);mark.textContent=on?'✓':'';const footer=document.querySelector('[data-rpt="houseConfirm"]');if(footer){footer.textContent='加入报告（'+SB.housePick.size+'）';footer.disabled=!SB.housePick.size}},true);

pages.sbSelect=()=>{const type=SB.type,chosen=SB.pickSelected || new Set();let html='';if(type==='小区'){html='<div class="sb-query"><span>⌕</span><input id="sb-community-query" placeholder="搜索小区名称或别名" value="'+sbEsc(SB.pickQuery)+'"></div><div class="sb-picker-results">'+SB.communityOptions.filter(c=>!SB.pickQuery||[c.name,c.district,c.block,...c.aliases].join(' ').toLowerCase().includes(SB.pickQuery.toLowerCase())).map(c=>'<button class="sb-property-choice '+(chosen.has(c.name)?'on':'')+'" data-rpt="togglePick:'+sbEsc(c.name)+'"><img src="thumb-community.jpg" alt=""><span><strong>'+sbEsc(c.name)+'</strong><small>'+sbEsc(c.district)+' · '+sbEsc(c.block)+'</small><small>别名：'+sbEsc(c.aliases.join('、')||'无')+'</small></span><em>'+(chosen.has(c.name)?'✓':'')+'</em></button>').join('')+'</div>'}
else {const list=SB.assets.filter(a=>a.type===type&&sbAvailableAsset(a)&&sbMatchesSource(a,type));html=sbSourceFilters(type)+'<div class="sb-media-grid">'+list.map(a=>'<button class="sb-media-choice '+(chosen.has(a.name)?'on':'')+'" data-rpt="togglePick:'+sbEsc(a.name)+'"><span class="sb-media-photo">'+sbMediaPreview(a)+''+(type==='视频'?'<em>▶</em>':'')+'</span><span class="sb-media-check">'+(chosen.has(a.name)?'✓':'')+'</span><small>'+type+' · '+sbEsc(a.time)+'</small></button>').join('')+'</div>'+(!list.length?'<div class="sb-emptybox">该分类暂无可用素材</div>':'')+'<div class="sb-selection-tip">没有合适的素材？<button data-rpt="goUpload:editor">去上传</button></div>'}
return sbPage('选择'+type,html+'<div class="sb-fixed-action"><button data-rpt="confirmPick">完成选择（'+chosen.size+'）</button></div>')};
// Add one grouped entry to the existing My page while preserving its housing and account sections.
const sbMyWithOldEntry=pages.me;
pages.me=()=>sbMyWithOldEntry().replace(/<button class='sb-me-entry'[\s\S]*?<\/button>/,'').replace("<div class='my-group-title'><h4>服务与提醒</h4>","<div class='my-group-title'><h4>资料库</h4></div><div class='my-menu'>"+menuRow('file','资料库','照片、视频与报告都在这里','sbLibrary','','orange')+"</div><div class='my-group-title'><h4>服务与提醒</h4>");
const sbNativeChatComposer=chatComposer;
chatComposer=function(expired=false){const composer=sbNativeChatComposer(expired);if(expired)return composer;return '<div class="sb-chat-composer"><div class="sb-chat-shortcuts"><button data-go="homePicker">'+icon('home',15)+'<span>房源</span></button><button data-rpt="chatPicker">'+icon('file',15)+'<span>发资料</span></button></div>'+composer+'<div class="sb-more-panel" hidden><div class="sb-more-grid"><button data-permission="camera">'+icon('camera',22)+'<span>拍摄</span></button><button data-sb="send:media">'+icon('image',22)+'<span>相册</span></button><button data-go="projectPicker">'+icon('building',22)+'<span>楼盘</span></button><button data-go="map">'+icon('pin',22)+'<span>位置</span></button></div><button class="sb-more-cancel" data-close-sheet>取消</button></div></div>'};
function sbCloseMore(){const composer=document.querySelector('.sb-chat-composer');if(composer){composer.classList.remove('more-open');const panel=composer.querySelector('.sb-more-panel');if(panel)panel.hidden=true}}
const sbNativeCloseSheet=closeSheet;
closeSheet=function(){sbCloseMore();return sbNativeCloseSheet()};
const sbPreviousSheet=openSheet;
openSheet=function(type){if(type==='sendMore'&&current==='chat'){const composer=document.querySelector('.sb-chat-composer');if(composer){const isOpen=composer.classList.toggle('more-open');composer.querySelector('.sb-more-panel').hidden=!isOpen;return}}return sbPreviousSheet(type)};
function sbSafeRich(html){const template=document.createElement('template');template.innerHTML=html;const allowed=new Set(['P','DIV','BR','B','STRONG','I','EM','UL','OL','LI','A']);const walk=node=>{for(const child of [...node.childNodes]){if(child.nodeType!==1)continue;if(['SCRIPT','STYLE','IFRAME','OBJECT','SVG'].includes(child.tagName)){child.remove();continue}walk(child);if(!allowed.has(child.tagName)){child.replaceWith(...child.childNodes);continue}const href=child.tagName==='A'?child.getAttribute('href'):null;for(const attr of [...child.attributes])child.removeAttribute(attr.name);if(href&&/^https?:\/\//i.test(href)){child.setAttribute('href',href);child.setAttribute('target','_blank');child.setAttribute('rel','noopener noreferrer')}}};walk(template.content);return template.innerHTML}
function sbSheet(title,html){html=sbSafeRich(html);const holder=document.getElementById('sheet');holder.innerHTML='<div class="sheet sb-help-sheet"><h4>'+title+'</h4><div class="sb-rich-copy">'+html+'</div><button class="sb-sheet-done" data-close-sheet>知道了</button></div>';holder.classList.add('on')}
function sbSendReports(ids) {
  const selected=ids.map(id=>SB.reports.find(item=>item.id===Number(id)));
  if(ids.length>5){showToast('一次最多发送5份报告');return}
  if(!selected.length||selected.some(report=>!report||!sbReportEnabled(report))){
    SB.chatReportPick=new Set(selected.filter(report=>report&&sbReportEnabled(report)).map(report=>report.id));
    go('sbChatReports',false);
    const disabledReport=selected.find(report=>report&&sbReportDirectlyDisabled(report));
    if(disabledReport)sbOpenUnavailable('report',disabledReport.id);
    else showToast('报告含暂不可用素材或失效房源，请编辑后发送');
    return;
  }
  for(const report of selected){
    const snapshot=sbCurrentReportSnapshot(report);
    SB.sentReport=snapshot;
    sbPushChatMessage({kind:'report',report:snapshot,cover:sbReportCardCover(snapshot)});
  }
  SB.chatReportPick.clear();
  closeSheet();
  go('chat');
}
// Each selected item is a separate message in the existing conversation timeline.
SB.chatMessages=[];
let sbMessageSerial=0;
function sbPushChatMessage(content){
  SB.chatMessages.push({id:++sbMessageSerial,customer:activeCustomer,time:new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}),...content});
}
function sbReportCardCover(report){
  const selected=report.selected||{};
  let image='thumb-skyline.jpg';
  for(const type of ['房源','图片','视频']){
    const first=(selected[type]||[]).find(value=>{
      if(type==='房源')return true;
      const asset=SB.assets.find(item=>item.type===type&&item.name===value);
      return asset&&!sbAssetDisabled(asset);
    });
    if(first){image=sbItemInfo(type,first).thumb;break}
  }
  const houses=(selected.房源||[]).map(value=>window.HousingDemo.get().houses.find(item=>item.key===value||item.title===value)).filter(Boolean);
  const mediaCounts=['图片','视频'].map(type=>(selected[type]||[]).filter(value=>{const asset=SB.assets.find(item=>item.type===type&&item.name===value);return asset&&!sbAssetDisabled(asset)}).length);
  const mediaLabels=[mediaCounts[0]?mediaCounts[0]+'张图片':'',mediaCounts[1]?mediaCounts[1]+'个视频':''].filter(Boolean);
  const format=value=>new Intl.NumberFormat('zh-CN',{maximumFractionDigits:2}).format(value);
  const range=(values,unit)=>{const nums=values.map(Number).filter(value=>Number.isFinite(value)&&value>0).sort((a,b)=>a-b);return nums.length?(nums[0]===nums.at(-1)?format(nums[0]):format(nums[0])+'–'+format(nums.at(-1)))+unit:''};
  const parts=(selected.房源||[]).length?[(selected.房源||[]).length+'套',range(houses.map(house=>house.area),'㎡'),[...new Set(houses.map(house=>Number(house.room)).filter(Boolean))].sort((a,b)=>a-b).map(room=>room+'室').join(' / ')].filter(Boolean):[];
  return {image,hasHouses:!!selected.房源?.length,summary:parts.join(' · '),price:range(houses.map(house=>house.price),'万'),mediaCount:mediaLabels.length?'共'+mediaLabels.join(' · '):''};
}
function sbSentMessageMarkup(message){
  const label=message.kind==='report'?'专属报告':message.asset.type;
  let content='';
  if(message.kind==='report'){
    const cover=message.cover;
    content='<button class="sb-inline-report" data-sb="mini:'+message.id+'"><span class="sb-mini-title">'+sbEsc(message.report.title)+'</span><span class="sb-mini-cover '+(cover.hasHouses?'has-houses':'')+'"><span class="sb-mini-cover-image"><img src="'+sbEsc(cover.image)+'" alt="资料封面">'+(cover.mediaCount?'<span class="sb-mini-media-count">'+sbEsc(cover.mediaCount)+'</span>':'')+'</span>'+(cover.hasHouses?'<span class="sb-mini-facts"><span>'+sbEsc(cover.summary)+'</span>'+(cover.price?'<strong>'+sbEsc(cover.price)+'</strong>':'')+'</span>':'')+'</span></button>';
  }else{
    const asset=message.asset;
    const thumb=sbEsc(asset.thumb||'');
    content=asset.type==='视频'?'<video class="sb-sent-media" controls poster="'+(thumb.startsWith('blob:')?'':thumb)+'" src="'+(thumb.startsWith('blob:')?thumb:'报告视频示例.mp4')+'"></video>':'<img class="sb-sent-media" src="'+thumb+'" alt="已发送图片">';
  }
  return '<div class="message-row me" data-sb-sent="'+message.id+'"><span class="real-avatar a2 sm"></span><div class="message-body"><div class="message-meta"><b>我</b><span>'+message.time+'</span></div><div class="sb-sent-content" aria-label="已发送'+label+'">'+content+'</div><div class="delivery-state">已发送</div></div></div>';
}
function sbRenderSentMessages(){
  const body=screenEl.querySelector('.chat-content');
  if(!body)return;
  body.insertAdjacentHTML('beforeend',SB.chatMessages.filter(message=>message.customer===activeCustomer).map(sbSentMessageMarkup).join(''));
  screenEl.scrollTop=screenEl.scrollHeight;
}
pages.chat=sbBaseChat;
const sbNativeGo=go;
go=function(id,push=true){if((['sbReport','sbSelect'].includes(current)||current==='housingAll'&&SB.housePickerMode)&&id!=='sbSelect'&&id!=='sbReport'&&!(id==='sbLibrary'&&SB.uploadReturn==='editor')&&id!=='sbHelp'&&id!=='sbNotice'&&!(id==='housingAll'&&SB.housePickerMode)&&SB.reportDirty){if(!confirm('报告尚未保存，离开将丢失本次修改。是否离开？'))return;SB.reportDirty=false;SB.newFromChat=false}const result=sbNativeGo(id,push);if(id==='chat')sbRenderSentMessages();return result};
document.addEventListener('input',e=>{if(e.target.id==='sb-title'){const text=Array.from(e.target.value).slice(0,20).join('');if(e.target.value!==text)e.target.value=text;SB.title=text;SB.reportDirty=true}if(e.target.id==='sb-report-query'){const q=e.target.value.trim().toLowerCase();SB.reportQuery=q;document.querySelectorAll('#sb-report-list .sb-report-tile').forEach(row=>row.hidden=!SB.reports.some(r=>String(r.id)===row.dataset.reportId&&sbSearchableReportTitle(r).toLowerCase().includes(q)));const list=document.getElementById('sb-report-list');document.getElementById('sb-no-match')?.remove();if(![...list.querySelectorAll('.sb-report-tile')].some(row=>!row.hidden))list.insertAdjacentHTML('beforeend','<div class="sb-emptybox" id="sb-no-match">没有匹配的报告</div>')}if(e.target.id==='sb-pick-query'||e.target.id==='sb-community-query'){SB.pickQuery=e.target.value.trim();const q=SB.pickQuery.toLowerCase();document.querySelectorAll('.sb-picker-results .sb-property-choice').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q))}});
document.addEventListener('input',e=>{
  if(e.target.id==='sb-chat-report-query'){
    const q=e.target.value.trim().toLowerCase();SB.chatReportQuery=e.target.value;
    const rows=[...document.querySelectorAll('#sb-chat-report-list .sb-report-tile')];
    rows.forEach(row=>row.hidden=!SB.reports.some(r=>String(r.id)===row.dataset.reportId&&sbSearchableReportTitle(r).toLowerCase().includes(q)));
    document.getElementById('sb-chat-report-empty').hidden=rows.some(row=>!row.hidden);
  }
});
document.addEventListener('change',e=>{if(e.target.id==='sb-notice-check')SB.disclaimerChecked=e.target.checked;if(e.target.id==='sb-file'&&SB.uploadReturn==='editor'){SB.uploadReturn='';setTimeout(()=>go('sbSelect'),0)}});
document.addEventListener('click',e=>{const old=e.target.closest('[data-sb]');if(old&&['remove','up','down'].includes(old.dataset.sb.split(':')[0]))SB.reportDirty=true;const el=e.target.closest('[data-rpt]');if(!el)return;const [action,...bits]=el.dataset.rpt.split(':');const value=bits.join(':');if(action==='help'){SB.infoReturn=current;closeSheet();go('sbHelp')}
if(action==='sourceFilter'){const [context,label]=value.split(':');SB.sourceFilters[context]=label;go(current,false)}
if(action==='notice'){SB.infoReturn=current;closeSheet();go('sbNotice')}
if(action==='new'){SB.newFromChat=false;sbNewReport()}if(action==='newFromChat'){closeSheet();SB.newFromChat=true;sbNewReport()}
if(action==='preview')sbPreviewReport(value)
if(action==='edit'){const r=SB.reports.find(x=>x.id===Number(value));if(r){if(sbReportDirectlyDisabled(r)){sbOpenUnavailable('report',r.id);return}sbLoadReport(r);go('sbReport')}}
if(action==='delete'){const r=SB.reports.find(x=>x.id===Number(value));if(r&&confirm(sbReportDirectlyDisabled(r)?'确定删除这份暂不可用的报告？历史已发送报告不受影响。':'确定删除报告「'+r.title+'」？已上传素材不会删除。')){SB.reports=SB.reports.filter(x=>x.id!==r.id);sbWrite('rt-send:smallb-reports-demo',SB.reports);SB.libraryTab='reports';go('sbLibrary')}}
if(action==='unavailable')sbOpenUnavailable(bits[0],bits[1]);
if(action==='deleteAsset'){const asset=SB.assets.find(x=>x.id===Number(value));if(asset&&confirm('确定删除这条素材？删除后无法再选用，历史已发送报告不受影响。')){ReportPrototype.setDeleted(sbAssetRef(asset));SB.libraryTab='assets';go('sbLibrary',false);showToast('素材已删除')}}
if(action==='save'){SB.title=(document.getElementById('sb-title')?.value||'').trim();const err=document.getElementById('sb-error');if(!SB.title){err.textContent='请输入报告标题';return}if(Array.from(SB.title).length>20){err.textContent='报告标题最多20字';return}if(SB.comps.some(c=>!SB.moduleTitles[c]?.trim())){err.textContent='请填写模块标题';return}if(SB.comps.some(c=>Array.from(SB.moduleTitles[c]||'').length>10)){err.textContent='模块标题最多10字';return}if(SB.comps.some(c=>Array.from(SB.desc[c]||'').length>100)){err.textContent='文字描述最多100字';return}if(SB.comps.some(c=>(SB.selected[c]||[]).length>20)){err.textContent='每类最多选20条素材';return}if(!SB.disclaimerChecked){err.textContent='请阅读并同意素材免责须知';return}if(!SB.comps.some(c=>SB.selected[c].length||SB.desc[c])){err.textContent='请至少添加一项素材或模块描述';return}if(SB.editId&&sbReportDirectlyDisabled(SB.reports.find(r=>r.id===SB.editId))){sbRender();sbOpenUnavailable('report',SB.editId);return}if(['图片','视频'].some(type=>(SB.selected[type]||[]).some(name=>sbAssetDisabled(SB.assets.find(asset=>asset.type===type&&asset.name===name))))){err.textContent='请先移除或替换暂不可用的素材';return}sbSaveReport();if(SB.newFromChat){SB.newFromChat=false;SB.chatReportPick.add(SB.editId);SB.chatReportQuery='';if(historyStack.at(-1)==='sbChatReports')historyStack.pop();go('sbChatReports',false)}else {SB.libraryTab='reports';go('sbLibrary')}}
if(action==='startBatch'){SB.selectionMode=SB.libraryTab;SB.batchAssets.clear();SB.batchReports.clear();go('sbLibrary',false)}if(action==='cancelBatch'){SB.selectionMode='';SB.batchAssets.clear();SB.batchReports.clear();go('sbLibrary',false)}if(action==='toggleBatchAsset'){const a=SB.assets.find(item=>String(item.id)===value);if(!a)return;SB.batchAssets.has(value)?SB.batchAssets.delete(value):SB.batchAssets.add(value);go('sbLibrary',false)}if(action==='toggleBatchReport'){SB.batchReports.has(value)?SB.batchReports.delete(value):SB.batchReports.add(value);go('sbLibrary',false)}if(action==='batchDelete')sbDeleteSelected();if(action==='libraryTab'){SB.libraryTab=value;SB.selectionMode='';SB.batchAssets.clear();SB.batchReports.clear();go('sbLibrary',false)}if(action==='infoBack')go(SB.infoReturn);if(action==='closeSendSheet')closeSheet();if(action==='chatPicker'){closeSheet();sbOpenSendSheet('choice')}if(action==='chatMaterials'){closeSheet();SB.chatMaterialPick=new Set();SB.chatMaterialFilter='全部';SB.sourceFilters.chat='全部';SB.sentAssetIds=[];go('sbChatMaterials')}if(action==='chatReports'){closeSheet();SB.chatReportPick=new Set();SB.chatReportQuery='';go('sbChatReports')};
if(action==='toggleChatAsset'){const id=Number(value);if(!SB.chatMaterialPick.has(id)&&SB.chatMaterialPick.size>=5){showToast('一次最多发送5条素材');return}SB.chatMaterialPick.has(id)?SB.chatMaterialPick.delete(id):SB.chatMaterialPick.add(id);const y=screenEl.scrollTop;go('sbChatMaterials',false);screenEl.scrollTop=y}if(action==='chatMaterialFilter'){SB.chatMaterialFilter=value;go('sbChatMaterials',false)}if(action==='chooseChatReport'){const report=SB.reports.find(r=>r.id===Number(value));if(!report)return;if(!SB.chatReportPick.has(report.id)&&SB.chatReportPick.size>=5){showToast('一次最多发送5份报告');return}if(sbReportDirectlyDisabled(report)){sbOpenUnavailable('report',report.id);return}if(sbReportHasDisabledAsset(report)||sbReportHasDelistedHouse(report)){showToast('报告含暂不可用素材或失效房源，请编辑后发送');return}SB.chatReportPick.has(report.id)?SB.chatReportPick.delete(report.id):SB.chatReportPick.add(report.id);const y=screenEl.scrollTop;go('sbChatReports',false);screenEl.scrollTop=y}if(action==='confirmChatReport'&&SB.chatReportPick.size)sbSendReports([...SB.chatReportPick]);
if (action === 'sendAssets') {
  const available = SB.assets.filter(asset => SB.chatMaterialPick.has(asset.id) && sbAvailableAsset(asset));
  if (available.length !== SB.chatMaterialPick.size) {
    SB.chatMaterialPick = new Set(available.map(asset => asset.id));
    go('sbChatMaterials',false);
    alert('有素材已不可用，请重新确认');
    return;
  }
  if (!available.length) return;
  if(available.length>5){showToast('一次最多发送5条素材');return}
  for(const asset of available)sbPushChatMessage({kind:'asset',asset});
  SB.sentAssetIds=[];SB.chatStatus='';
  closeSheet();go('chat');
}
if(action==='sendReport')sbSendReports([value]);
if(action==='goUpload'){closeSheet();SB.uploadReturn=value;if(value==='editor')SB.pickerReturn='sbSelect';SB.libraryTab='assets';go('sbLibrary')}
if(action==='houseBack'){SB.housePickerMode=false;go('sbReport')}
if(action==='houseConfirm')sbConfirmHousePicker()
if(action==='togglePick'){if(!SB.pickSelected.has(value)&&SB.pickSelected.size>=20){showToast('每类最多选20条');return}SB.pickSelected.has(value)?SB.pickSelected.delete(value):SB.pickSelected.add(value);sbRender()}
if (action === 'confirmPick') {
  const type = SB.type;
  if(SB.pickSelected.size>20){showToast('每类最多选20条');return}
  if (type === '图片' || type === '视频') {
    const available = new Set(SB.assets.filter(asset => asset.type === type && sbAvailableAsset(asset)).map(asset => asset.name));
    const previous = SB.selected[type];
    const keep = previous.filter(name => SB.pickSelected.has(name) || !available.has(name));
    const newlySelected = [...SB.pickSelected].filter(name => !previous.includes(name) && available.has(name));
    SB.selected[type] = [...keep, ...newlySelected];
  } else {
    SB.selected[type] = [...SB.pickSelected];
  }
  SB.reportDirty = true;
  go('sbReport');
}
});


ReportPrototype.onAvailabilityChange(() => {
  if (current === 'sbChatMaterials') {
    SB.chatMaterialPick = new Set(SB.assets
      .filter(asset => SB.chatMaterialPick.has(asset.id) && sbAvailableAsset(asset))
      .map(asset => asset.id));
    sbRender();
  } else if (current === 'sbSelect' && ['图片', '视频'].includes(SB.type) || current === 'sbLibrary' || current === 'sbChatReports' || current === 'sbReport') {
    sbRender();
  }
});

document.addEventListener('click',event=>{const action=event.target.closest('[data-sb]')?.dataset.sb;if(action==='select:图片'||action==='select:视频'){SB.sourceFilters[SB.type]='全部';go('sbSelect',false)}});
