const DEFAULTS = {
  pv_total:           '',
  pv_mo1_1: '', pv_mo1_2: '', pv_mo1_3: '', pv_mo1_4: '',
  pv_mo2_1: '', pv_mo2_2: '', pv_mo2_3: '', pv_mo2_4: '',
  pv_mo3_1: '', pv_mo3_2: '', pv_mo3_3: '', pv_mo3_4: '',
  pv_mo4_1: '', pv_mo4_2: '', pv_mo4_3: '', pv_mo4_4: '',
  mo1_power: '', mo2_power: '', mo3_power: '', mo4_power: '',
  pv_t1_1:  '', pv_t1_2:  '', pv_t1_3:  '', pv_t1_4:  '',
  pv_t2_1:  '', pv_t2_2:  '', pv_t2_3:  '', pv_t2_4:  '',
  pv_t3_1:  '', pv_t3_2:  '', pv_t3_3:  '', pv_t3_4:  '',
  grid_import:       '', grid_export:       '',
  grid_power:        '', conso:             '', autosuff_ratio:    '',
  grid_export_daily: '', grid_import_daily: '',
  pv_prod_daily:     '', conso_daily:       '',
  roi_solar:         '', roi_battery:       '', roi_peak_shaving:  '',
  roi_charge_cost:   '', roi_autosuff:      '',
  roi_solar_total: '', roi_solar_total_bleu: '', roi_solar_total_blanc: '', roi_solar_total_rouge: '',
  roi_battery_total: '', roi_battery_total_bleu: '', roi_battery_total_blanc: '', roi_battery_total_rouge: '',
  t1_soc:           '', t1_state:         '', t1_charge_pow:    '',
  t1_disch_pow:     '', t1_temp:          '', t1_chg_time:      '',
  t1_dch_time:      '', t1_alarm:         '', t1_mode:          '',
  t1_chg_daily:     '', t1_dch_daily:     '',
  t1_dc_output:     '', t1_led_switch:    '', t1_led_state:     '',
  t1_offgrid_switch:'', t1_offgrid_state: '',
  t2_soc:           '', t2_state:         '', t2_charge_pow:    '',
  t2_disch_pow:     '', t2_temp:          '', t2_chg_time:      '',
  t2_dch_time:      '', t2_alarm:         '', t2_mode:          '',
  t2_chg_daily:     '', t2_dch_daily:     '',
  t2_dc_output:     '', t2_led_switch:    '', t2_led_state:     '',
  t2_offgrid_switch:'', t2_offgrid_state: '',
  t3_soc:           '', t3_state:         '', t3_charge_pow:    '',
  t3_disch_pow:     '', t3_temp:          '', t3_chg_time:      '',
  t3_dch_time:      '', t3_alarm:         '', t3_mode:          '',
  t3_chg_daily:     '', t3_dch_daily:     '',
  t3_dc_output:     '', t3_led_switch:    '', t3_led_state:     '',
  t3_offgrid_switch:'', t3_offgrid_state: '',
  t1_rssi: '', t2_rssi: '', t3_rssi: '',
  t1_cycles: '', t2_cycles: '', t3_cycles: '',
  t1_mqtt_state: '', t1_wifi_ip: '', t1_wifi_ssid: '',
  t2_mqtt_state: '', t2_wifi_ip: '', t2_wifi_ssid: '',
  t3_mqtt_state: '', t3_wifi_ip: '', t3_wifi_ssid: '',
  tempo_color:      '', tempo_demain:     '',
  tempo_j_rouge:    '', tempo_j_blanc:    '', tempo_j_bleu:     '',
  solcast_today:    '', solcast_tomorrow: '',
  meteo_temp:       '', meteo_cloud:      '', meteo_rain:       '', meteo_uv: '',
  cluster_mode_sensor: '',
  cluster_soc_min:    '', cluster_chg_pow:    '',
  cluster_dch_pow:    '', cluster_forced_soc: '', cluster_forced_pow: '',
  cluster_force_chg:  '', cluster_force_dch:  '', cluster_standby:    '',
};

const EDITOR_FIELDS = [
  { section: '⚙ Configuration', fields: [
    { key:'titan_count',      label:'Nombre de Titans',    isConfig:true, isSelect:['1','2','3'] },
    { key:'mo_count',         label:'Nombre de MO',        isConfig:true, isSelect:['0','1','2','3','4'] },
    { key:'show_roi',         label:'Afficher ROI',        isConfig:true, isToggle:true },
    { key:'show_tempo_jours', label:'Afficher jours Tempo',isConfig:true, isToggle:true },
    { key:'mode_pilotage',    label:'Mode pilotage',       isConfig:true, isSelect:['SmartIA','MR1'] },
  ]},
  { section: '☀ Production', fields: [
    { key:'pv_prod_daily',    label:'Production PV daily (suffixe)',    hint:'sensor.solar_pv_panel_production' },
    { key:'pv_total', label:'Puissance totale PV' },
    { key:'pv_t1_1', label:'Titan 1 DC 1' }, { key:'pv_t1_2', label:'Titan 1 DC 2' },
    { key:'pv_t1_3', label:'Titan 1 DC 3' }, { key:'pv_t1_4', label:'Titan 1 DC 4' },
    { key:'pv_t2_1', label:'Titan 2 DC 1' }, { key:'pv_t2_2', label:'Titan 2 DC 2' },
    { key:'pv_t2_3', label:'Titan 2 DC 3' }, { key:'pv_t2_4', label:'Titan 2 DC 4' },
    { key:'pv_t3_1', label:'Titan 3 DC 1' }, { key:'pv_t3_2', label:'Titan 3 DC 2' },
    { key:'pv_t3_3', label:'Titan 3 DC 3' }, { key:'pv_t3_4', label:'Titan 3 DC 4' },
  ]},
  { section: '🟡 MO 1', fields: [
    { key:'mo1_name',  label:'Nom affiché', isConfig:true },
    { key:'mo1_power', label:'Onduleur AC (power safe)' },
    { key:'pv_mo1_1',  label:'PV1' }, { key:'pv_mo1_2', label:'PV2' },
    { key:'pv_mo1_3',  label:'PV3' }, { key:'pv_mo1_4', label:'PV4' },
  ]},
  { section: '🟡 MO 2', fields: [
    { key:'mo2_name',  label:'Nom affiché', isConfig:true },
    { key:'mo2_power', label:'Onduleur AC (power safe)' },
    { key:'pv_mo2_1',  label:'PV1' }, { key:'pv_mo2_2', label:'PV2' },
    { key:'pv_mo2_3',  label:'PV3' }, { key:'pv_mo2_4', label:'PV4' },
  ]},
  { section: '🟡 MO 3', fields: [
    { key:'mo3_name',  label:'Nom affiché', isConfig:true },
    { key:'mo3_power', label:'Onduleur AC (power safe)' },
    { key:'pv_mo3_1',  label:'PV1' }, { key:'pv_mo3_2', label:'PV2' },
    { key:'pv_mo3_3',  label:'PV3' }, { key:'pv_mo3_4', label:'PV4' },
  ]},
  { section: '🟡 MO 4', fields: [
    { key:'mo4_name',  label:'Nom affiché', isConfig:true },
    { key:'mo4_power', label:'Onduleur AC (power safe)' },
    { key:'pv_mo4_1',  label:'PV1' }, { key:'pv_mo4_2', label:'PV2' },
    { key:'pv_mo4_3',  label:'PV3' }, { key:'pv_mo4_4', label:'PV4' },
  ]},
  { section: '🔌 Réseau & Conso', fields: [
    { key:'grid_import',       label:'Import réseau (W)' },
    { key:'grid_export',       label:'Export réseau (W)' },
    { key:'grid_power',        label:'Puissance réseau brute' },
    { key:'grid_export_daily', label:'Export réseau daily (kWh)' },
    { key:'grid_import_daily', label:'Import réseau daily (kWh)' },
    { key:'conso',             label:'Consommation maison (W)' },
    { key:'conso_daily',       label:'Consommation daily (suffixe)', hint:'sensor.home_consumption' },
    { key:'autosuff_ratio',    label:'Autosuffisance (%)' },
  ]},
  { section: '📊 ROI & Économies — suffixes', fields: [
    { key:'pv_prod_daily',    label:'Production PV daily (suffixe)',    hint:'sensor.solar_pv_panel_production' },
    { key:'roi_solar',        label:'Économies solaires (suffixe)',      hint:'sensor.solar_savings' },
    { key:'roi_battery',      label:'ROI batterie (suffixe)',            hint:'sensor.battery_roi' },
    { key:'roi_peak_shaving', label:'Peak shaving (suffixe)',            hint:'sensor.peak_shaving_value' },
    { key:'roi_charge_cost',  label:'Coût charge réseau (suffixe)',      hint:'sensor.battery_grid_charge_cost' },
    { key:'roi_autosuff',     label:'Autosuffisance énergie (suffixe)',  hint:'sensor.autosuffisance_energy' },
    { key:'solar_purchase_price',   label:'Prix achat solaire (€)',         isConfig:true, isNumeric:true },
    { key:'battery_purchase_price', label:'Prix achat batterie (€)',        isConfig:true, isNumeric:true },
    { key:'installation_date',      label:'Date de mise en service',        isConfig:true, isDate:true },
    { key:'roi_solar_yearly',       label:'Économies solaire yearly' },
    { key:'roi_battery_yearly',     label:'ROI batterie yearly' },
    { key:'roi_solar_total',        label:'Économies solaire total (€)' },
    { key:'roi_solar_total_bleu',   label:'Économies solaire total — Bleu' },
    { key:'roi_solar_total_blanc',  label:'Économies solaire total — Blanc' },
    { key:'roi_solar_total_rouge',  label:'Économies solaire total — Rouge' },
    { key:'roi_battery_total',      label:'ROI batterie total (€)' },
    { key:'roi_battery_total_bleu', label:'ROI batterie total — Bleu' },
    { key:'roi_battery_total_blanc',label:'ROI batterie total — Blanc' },
    { key:'roi_battery_total_rouge',label:'ROI batterie total — Rouge' },
  ]},
  { section: '🔋 Titan 1', fields: [
    { key:'t1_name',          label:'Nom affiché', isConfig:true },
    { key:'t1_soc',           label:'SOC (%)' }, { key:'t1_state', label:'État' },
    { key:'t1_charge_pow',    label:'Puissance charge (W)' },
    { key:'t1_disch_pow',     label:'Puissance décharge (W)' },
    { key:'t1_chg_daily',     label:'Charge daily (kWh)' },
    { key:'t1_dch_daily',     label:'Décharge daily (kWh)' },
    { key:'t1_dc_output',     label:'DC Output' },
    { key:'t1_temp',          label:'Température (°C)' },
    { key:'t1_chg_time',      label:'Temps charge restant (min)' },
    { key:'t1_dch_time',      label:'Temps décharge restant (min)' },
    { key:'t1_alarm',         label:'Alarme' },
    { key:'t1_mode',          label:'Mode de fonctionnement' },
    { key:'t1_led_switch',    label:'Switch LED' }, { key:'t1_led_state',     label:'État LED' },
    { key:'t1_offgrid_switch',label:'Switch Off-Grid' }, { key:'t1_offgrid_state', label:'État Off-Grid' },
    { key:'t1_capacity',      label:'Capacité totale (kWh)' },
    { key:'t1_eps',           label:'Réserve EPS (%)' },
    { key:'t1_rssi',          label:'RSSI WiFi (dBm)' },
    { key:'t1_mqtt_state',    label:'MQTT Server état' },
    { key:'t1_wifi_ip',       label:'WiFi IP' },
    { key:'t1_wifi_ssid',     label:'WiFi SSID' },
    { key:'t1_cycles',        label:'Cycles' },
  ]},
  { section: '🔋 Titan 2', fields: [
    { key:'t2_name',          label:'Nom affiché', isConfig:true },
    { key:'t2_soc',           label:'SOC (%)' }, { key:'t2_state', label:'État' },
    { key:'t2_charge_pow',    label:'Puissance charge (W)' },
    { key:'t2_disch_pow',     label:'Puissance décharge (W)' },
    { key:'t2_chg_daily',     label:'Charge daily (kWh)' },
    { key:'t2_dch_daily',     label:'Décharge daily (kWh)' },
    { key:'t2_dc_output',     label:'DC Output' },
    { key:'t2_temp',          label:'Température (°C)' },
    { key:'t2_chg_time',      label:'Temps charge restant (min)' },
    { key:'t2_dch_time',      label:'Temps décharge restant (min)' },
    { key:'t2_alarm',         label:'Alarme' },
    { key:'t2_mode',          label:'Mode de fonctionnement' },
    { key:'t2_led_switch',    label:'Switch LED' }, { key:'t2_led_state',     label:'État LED' },
    { key:'t2_offgrid_switch',label:'Switch Off-Grid' }, { key:'t2_offgrid_state', label:'État Off-Grid' },
    { key:'t2_capacity',      label:'Capacité totale (kWh)' },
    { key:'t2_eps',           label:'Réserve EPS (%)' },
    { key:'t2_rssi',          label:'RSSI WiFi (dBm)' },
    { key:'t2_mqtt_state',    label:'MQTT Server état' },
    { key:'t2_wifi_ip',       label:'WiFi IP' },
    { key:'t2_wifi_ssid',     label:'WiFi SSID' },
    { key:'t2_cycles',        label:'Cycles' },
  ]},
  { section: '🔋 Titan 3', fields: [
    { key:'t3_name',          label:'Nom affiché', isConfig:true },
    { key:'t3_soc',           label:'SOC (%)' }, { key:'t3_state', label:'État' },
    { key:'t3_charge_pow',    label:'Puissance charge (W)' },
    { key:'t3_disch_pow',     label:'Puissance décharge (W)' },
    { key:'t3_chg_daily',     label:'Charge daily (kWh)' },
    { key:'t3_dch_daily',     label:'Décharge daily (kWh)' },
    { key:'t3_dc_output',     label:'DC Output' },
    { key:'t3_temp',          label:'Température (°C)' },
    { key:'t3_chg_time',      label:'Temps charge restant (min)' },
    { key:'t3_dch_time',      label:'Temps décharge restant (min)' },
    { key:'t3_alarm',         label:'Alarme' },
    { key:'t3_mode',          label:'Mode de fonctionnement' },
    { key:'t3_led_switch',    label:'Switch LED' }, { key:'t3_led_state',     label:'État LED' },
    { key:'t3_offgrid_switch',label:'Switch Off-Grid' }, { key:'t3_offgrid_state', label:'État Off-Grid' },
    { key:'t3_capacity',      label:'Capacité totale (kWh)' },
    { key:'t3_eps',           label:'Réserve EPS (%)' },
    { key:'t3_rssi',          label:'RSSI WiFi (dBm)' },
    { key:'t3_mqtt_state',    label:'MQTT Server état' },
    { key:'t3_wifi_ip',       label:'WiFi IP' },
    { key:'t3_wifi_ssid',     label:'WiFi SSID' },
    { key:'t3_cycles',        label:'Cycles' },
  ]},
  { section: '⚙ Cluster Controls', fields: [
    { key:'cluster_mode_sensor', label:'Sensor mode actif (lecture)' },
    { key:'cluster_soc_min',    label:'SOC Min (number entity)' },
    { key:'cluster_chg_pow',    label:'Puissance Charge (number entity)' },
    { key:'cluster_dch_pow',    label:'Puissance Décharge (number entity)' },
    { key:'cluster_forced_soc', label:'SOC cible forcé (number entity)' },
    { key:'cluster_forced_pow', label:'Puissance manuelle (number entity)' },
    { key:'cluster_force_chg',  label:'Bouton Forcer Charge (button entity)' },
    { key:'cluster_force_dch',  label:'Bouton Forcer Décharge (button entity)' },
    { key:'cluster_standby',    label:'Bouton Standby (button entity)' },
  ]},
  { section: '⚡ Tempo EDF', fields: [
    { key:'tempo_color',   label:'Couleur actuelle' },
    { key:'tempo_demain',  label:'Couleur demain' },
    { key:'tempo_j_rouge', label:'Jours rouges restants' },
    { key:'tempo_j_blanc', label:'Jours blancs restants' },
    { key:'tempo_j_bleu',  label:'Jours bleus restants' },
  ]},
  { section: '🌤 Solcast & Météo', fields: [
    { key:'solcast_today',    label:"Prévision aujourd'hui (kWh)" },
    { key:'solcast_tomorrow', label:'Prévision demain (kWh)' },
    { key:'meteo_temp',       label:'Température (°C)' },
    { key:'meteo_cloud',      label:'Couverture nuageuse (%)' },
    { key:'meteo_rain',       label:'Chance de pluie (%)' },
    { key:'meteo_uv',         label:'Indice UV' },
  ]},
];

class SolaireDashboardCardEditor extends HTMLElement {
  constructor() { super(); this.attachShadow({mode:'open'}); this._config={}; this._hass=null; }
  set hass(h) { this._hass=h; }
  setConfig(c) { this._config=c; this._render(); }

  _val(k, isConfig) {
    if(isConfig) return this._config[k] ?? '';
    return this._config.sensors?.[k] || DEFAULTS[k] || '';
  }
  _ok(val)  { if(!val) return ''; return this._hass?.states[val] ? '✓' : '✗'; }
  _cls(val) { if(!val) return ''; return this._hass?.states[val] ? 'ok' : 'err'; }

  _onChange(k, v, isConfig) {
    const fieldDef = EDITOR_FIELDS.flatMap(s => s.fields).find(f => f.key === k);
    if(fieldDef?.label?.includes('suffixe') && v.endsWith('_daily')) {
      v = v.slice(0, -6);
    }
    if(isConfig) {
      this._config = {...this._config, [k]: v};
    } else {
      this._config = {...this._config, sensors:{...this._config.sensors, [k]: v}};
    }
    this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:this._config},bubbles:true,composed:true}));
    this._render();
  }
  _onLink(titan, idx, field, v) {
    const key = `titan${titan}_links`;
    const links = [...(this._config[key]||[])];
    while(links.length<=idx) links.push({});
    links[idx] = {...links[idx], [field]: v};
    this._config = {...this._config, [key]: links};
    this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:this._config},bubbles:true,composed:true}));
    this._render();
  }

  _onModeBtn(idx, field, v) {
    const btns = [...(this._config.cluster_mode_buttons||[])];
    while(btns.length<=idx) btns.push({label:'',entity:''});
    btns[idx] = {...btns[idx], [field]: v};
    this._config = {...this._config, cluster_mode_buttons: btns};
    this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:this._config},bubbles:true,composed:true}));
    this._render();
  }

  _addModeBtn() {
    const btns = [...(this._config.cluster_mode_buttons||[]), {label:'',entity:''}];
    this._config = {...this._config, cluster_mode_buttons: btns};
    this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:this._config},bubbles:true,composed:true}));
    this._render();
  }

  _removeModeBtn(idx) {
    const btns = [...(this._config.cluster_mode_buttons||[])];
    btns.splice(idx,1);
    this._config = {...this._config, cluster_mode_buttons: btns};
    this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:this._config},bubbles:true,composed:true}));
    this._render();
  }

  _render() {
    const ids = this._hass
      ? Object.keys(this._hass.states).filter(i=>
          i.startsWith('sensor.')||i.startsWith('switch.')||
          i.startsWith('number.')||i.startsWith('select.')||
          i.startsWith('button.')).sort()
      : [];
    const t1l=this._config.titan1_links||[];
    const t2l=this._config.titan2_links||[];
    const t3l=this._config.titan3_links||[];
    const modeBtns = this._config.cluster_mode_buttons||[];

    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block;font-family:'Segoe UI',sans-serif} *{box-sizing:border-box}
        .sec{margin-bottom:14px}
        .sec-t{font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;padding:6px 0 7px;border-bottom:1px solid rgba(16,185,129,0.2);margin-bottom:7px}
        .f{display:flex;align-items:center;gap:8px;margin-bottom:5px}
        label{font-size:14px;color:#555;min-width:170px;flex-shrink:0}
        .iw{flex:1;display:flex;align-items:center;gap:5px}
        input{flex:1;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;font-family:monospace;background:#fafafa;color:#333;outline:none}
        input:focus{border-color:#10b981}
        .ind{font-size:14px;width:16px;text-align:center;font-weight:700;flex-shrink:0}
        .ok{color:#10b981} .err{color:#f43f5e}
        .note{font-size:13px;color:#777;background:#f5f5f5;border-radius:6px;padding:8px;line-height:1.6;margin-bottom:7px}
        code{background:#e8e8e8;padding:1px 4px;border-radius:3px;font-size:12px}
        .sub{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#888;margin:8px 0 5px}
        .mode-row{display:flex;align-items:center;gap:6px;margin-bottom:6px}
        .mode-lbl{width:90px;flex-shrink:0;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;background:#fafafa;color:#333;outline:none}
        .mode-lbl:focus{border-color:#10b981}
        .mode-ent{flex:1;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;font-family:monospace;background:#fafafa;color:#333;outline:none}
        .mode-ent:focus{border-color:#10b981}
        .mode-del{background:#fee2e2;border:1px solid #fca5a5;color:#dc2626;border-radius:6px;padding:3px 8px;cursor:pointer;font-size:13px;font-weight:700;flex-shrink:0}
        .mode-del:hover{background:#fca5a5}
        .add-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.4);color:#10b981;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;margin-top:4px}
        .add-btn:hover{background:rgba(16,185,129,0.2)}
      </style>
      <datalist id="sl">${ids.map(i=>`<option value="${i}">`).join('')}</datalist>
      ${EDITOR_FIELDS.map(({section, fields}) => `
        <div class="sec">
          <div class="sec-t">${section}</div>
          ${fields.map(({key, label, isConfig, isToggle, isSelect, isNumeric, isDate, hint}) => {
            const v = this._val(key, isConfig);
            if(isToggle) {
              const val = v === '' ? true : v === 'false' ? false : v;
              return `<div class="f"><label>${label}</label><div class="iw">
                <select data-key="${key}" data-config="1" style="flex:1;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;background:#fafafa;color:#333;outline:none">
                  <option value="true"  ${val!==false?'selected':''}>✓ Activé</option>
                  <option value="false" ${val===false?'selected':''}>✗ Désactivé</option>
                </select>
                <span class="ind"></span>
              </div></div>`;
            }
            if(isSelect) {
              return `<div class="f"><label>${label}</label><div class="iw">
                <select data-key="${key}" data-config="1" style="flex:1;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;background:#fafafa;color:#333;outline:none">
                  ${isSelect.map(opt => `<option value="${opt}" ${String(v)===String(opt)?'selected':''}>${opt}</option>`).join('')}
                </select>
                <span class="ind"></span>
              </div></div>`;
            }
            if(isNumeric) {
              return `<div class="f"><label>${label}</label><div class="iw">
                <input type="number" data-key="${key}" data-config="1" value="${v}" placeholder="0" min="0" step="100"
                  style="flex:1;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;font-family:monospace;background:#fafafa;color:#333;outline:none"/>
                <span class="ind"></span>
              </div></div>`;
            }
            if(isDate) {
              return `<div class="f"><label>${label}</label><div class="iw">
                <input type="date" data-key="${key}" data-config="1" value="${v}"
                  style="flex:1;padding:5px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;font-family:monospace;background:#fafafa;color:#333;outline:none"/>
                <span class="ind"></span>
              </div></div>`;
            }
            const ph = hint || DEFAULTS[key] || '';
            return `<div class="f"><label>${label}</label><div class="iw">
              <input type="text" list="sl" data-key="${key}" data-config="${isConfig?'1':''}" value="${v}" placeholder="${ph}"/>
              ${(!isConfig && !hint) ? `<span class="ind ${this._cls(v)}">${this._ok(v)}</span>` : '<span class="ind"></span>'}
            </div></div>`;
          }).join('')}
        </div>
      `).join('')}

      <div class="sec">
        <div class="sec-t">⚙ Modes Working (boutons)</div>
        <div class="note">Chaque ligne = un bouton de mode. <strong>Label</strong> affiché dans le select · <strong>Entity</strong> = <code>button.izypower_...</code> appelée au press</div>
        <div style="display:flex;gap:60px;margin-bottom:4px;padding:0 2px">
          <span style="font-size:11px;color:#888;width:90px">Label</span>
          <span style="font-size:11px;color:#888">Entité bouton</span>
        </div>
        ${modeBtns.map((b,i) => `
          <div class="mode-row">
            <input class="mode-lbl" type="text" placeholder="ex: Self-Consumed" data-midx="${i}" data-mfield="label" value="${b.label||''}"/>
            <input class="mode-ent" type="text" list="sl" placeholder="button.izypower_..." data-midx="${i}" data-mfield="entity" value="${b.entity||''}"/>
            <span class="ind ${this._cls(b.entity||'')}">${this._ok(b.entity||'')}</span>
            <button class="mode-del" data-mdel="${i}">✕</button>
          </div>
        `).join('')}
        <button class="add-btn" id="add-mode-btn">+ Ajouter un mode</button>
      </div>

      <div class="sec">
        <div class="sec-t">🔗 Batteries Link</div>
        <div class="note">Format : <code>sensor.izypower_titan_private_{HOST}_link_{SN}_link_batt_soc</code><br>États HA → rechercher <strong>link_batt_soc</strong></div>
        ${[
          [1,0,'T1 Link 1',t1l[0]],[1,1,'T1 Link 2',t1l[1]],[1,2,'T1 Link 3',t1l[2]],[1,3,'T1 Link 4',t1l[3]],[1,4,'T1 Link 5',t1l[4]],
          [2,0,'T2 Link 1',t2l[0]],[2,1,'T2 Link 2',t2l[1]],[2,2,'T2 Link 3',t2l[2]],[2,3,'T2 Link 4',t2l[3]],[2,4,'T2 Link 5',t2l[4]],
          [3,0,'T3 Link 1',t3l[0]],[3,1,'T3 Link 2',t3l[1]],[3,2,'T3 Link 3',t3l[2]],[3,3,'T3 Link 4',t3l[3]],[3,4,'T3 Link 5',t3l[4]],
        ].map(([t,i,lbl,l]) => `
          <div class="sub">${lbl}</div>
          ${['soc','temp'].map(f => `<div class="f"><label>${f==='soc'?'SOC':'Température'}</label><div class="iw">
            <input type="text" list="sl" data-titan="${t}" data-idx="${i}" data-field="${f}" value="${l?.[f]||''}"/>
            <span class="ind ${this._cls(l?.[f]||'')}">${this._ok(l?.[f]||'')}</span>
          </div></div>`).join('')}
        `).join('')}
      </div>
    `;

    this.shadowRoot.querySelectorAll('input[data-key]').forEach(inp =>
      inp.addEventListener('change', e =>
        this._onChange(e.target.dataset.key, e.target.value.trim(), e.target.dataset.config==='1')));

    this.shadowRoot.querySelectorAll('select[data-key]').forEach(sel =>
      sel.addEventListener('change', e => {
        const v = e.target.value;
        const parsed = v === 'true' ? true : v === 'false' ? false : isNaN(+v) ? v : +v;
        this._onChange(e.target.dataset.key, parsed, true);
      }));

    this.shadowRoot.querySelectorAll('input[data-titan]').forEach(inp =>
      inp.addEventListener('change', e => {
        const {titan, idx, field} = e.target.dataset;
        this._onLink(+titan, +idx, field, e.target.value.trim());
      }));

    this.shadowRoot.querySelectorAll('input[data-midx]').forEach(inp =>
      inp.addEventListener('change', e =>
        this._onModeBtn(+e.target.dataset.midx, e.target.dataset.mfield, e.target.value.trim())));
    this.shadowRoot.querySelectorAll('button[data-mdel]').forEach(btn =>
      btn.addEventListener('click', e => this._removeModeBtn(+e.target.dataset.mdel)));
    this.shadowRoot.getElementById('add-mode-btn')
      ?.addEventListener('click', () => this._addModeBtn());
  }
}
customElements.define('solaire-dashboard-card-editor', SolaireDashboardCardEditor);

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Share+Tech+Mono&display=swap');
  :host{display:block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-variant-numeric:tabular-nums}
  *{box-sizing:border-box;margin:0;padding:0}
  :host {
    --bg:#08090c; --sur:#0d1117; --sur2:#141a22; --dim:#1e2936;
    --bord:rgba(16,185,129,0.08);
    --acc:#10b981; --acc2:#34d399;
    --cyan:#06b6d4; --amber:#f59e0b; --red:#f43f5e; --blue:#3b82f6;
    --txt:#e2e8f0; --mut:#4b5563;
    --sh-sm:0 2px 8px rgba(0,0,0,0.45),0 1px 2px rgba(0,0,0,0.6);
    --sh-md:0 4px 20px rgba(0,0,0,0.5),0 2px 4px rgba(0,0,0,0.7),inset 0 1px 0 rgba(255,255,255,0.03);
    --sh-lg:0 8px 40px rgba(0,0,0,0.6),0 4px 8px rgba(0,0,0,0.8),inset 0 1px 0 rgba(255,255,255,0.04);
    --r:16px; --ri:10px;
  }
  .card {
    background:radial-gradient(ellipse at 20% 0%,rgba(16,185,129,0.05) 0%,transparent 55%),
               radial-gradient(ellipse at 85% 100%,rgba(6,182,212,0.04) 0%,transparent 50%),
               var(--bg);
    color:var(--txt); font-family:'Syne',sans-serif; font-size:18px;
    padding:16px; display:flex; flex-direction:column; gap:10px;
    border-radius:20px; min-width:0; container-type:inline-size;
  }
  @keyframes breathe{0%,100%{box-shadow:0 0 6px var(--acc)}50%{box-shadow:0 0 18px var(--acc),0 0 30px rgba(16,185,129,0.3)}}
  @keyframes flowRight{from{background-position:0 0}to{background-position:20px 0}}
  @keyframes flowLeft{from{background-position:0 0}to{background-position:-20px 0}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
  #block-header  {animation:fadeUp 0.35s ease both}
  #block-solcast {animation:fadeUp 0.35s 0.07s ease both}
  #block-kpi     {animation:fadeUp 0.35s 0.14s ease both}
  #block-titans  {animation:fadeUp 0.35s 0.21s ease both}
  #block-controls{animation:fadeUp 0.35s 0.28s ease both}
  #block-flux    {animation:fadeUp 0.35s 0.35s ease both}
  #block-roi     {animation:fadeUp 0.35s 0.42s ease both}

  .header {
    display:flex; align-items:center; justify-content:space-between;
    padding:12px 18px;
    background:linear-gradient(135deg,rgba(16,185,129,0.07) 0%,var(--sur) 55%);
    box-shadow:var(--sh-md); border-radius:var(--r);
  }
  .logo { display:flex; align-items:center; gap:10px; }
  .logo-dot { width:9px;height:9px;border-radius:50%;background:var(--acc);animation:breathe 2.5s ease-in-out infinite; }
  .logo-title { font-family:'Share Tech Mono',monospace;font-size:15px;font-weight:700;letter-spacing:3px;color:var(--acc);text-transform:uppercase; }
  .tempo-chips { display:flex;gap:10px;align-items:center; }
  .tempo-group { display:flex;flex-direction:column;align-items:center;gap:3px; }
  .tempo-lbl   { font-size:10px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;font-weight:700; }
  .chip { padding:4px 13px;border-radius:20px;font-size:13px;font-weight:700;font-family:'Share Tech Mono',monospace;letter-spacing:1px;box-shadow:0 2px 8px rgba(0,0,0,0.4); }
  .chip-bleu   { background:rgba(59,130,246,0.12);color:#60a5fa;box-shadow:0 0 12px rgba(59,130,246,0.15),0 2px 8px rgba(0,0,0,0.4); }
  .chip-blanc  { background:rgba(148,163,184,0.10);color:#94a3b8;box-shadow:0 2px 8px rgba(0,0,0,0.4); }
  .chip-rouge  { background:rgba(244,63,94,0.12);color:#fb7185;box-shadow:0 0 12px rgba(244,63,94,0.15),0 2px 8px rgba(0,0,0,0.4); }
  .chip-unknown{ background:rgba(80,80,80,0.08);color:var(--mut);box-shadow:0 2px 8px rgba(0,0,0,0.4); }
  .jours { display:flex;gap:14px;font-family:'Share Tech Mono',monospace;font-size:13px;color:var(--mut); }
  .j-item { display:flex;align-items:center;gap:5px; }
  .j-dot  { width:6px;height:6px;border-radius:50%; }

  .solcast-row { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
  .solcast-card {
    background:linear-gradient(135deg,rgba(245,158,11,0.06) 0%,var(--sur) 60%);
    box-shadow:var(--sh-md); border-radius:var(--r);
    padding:14px 16px; display:flex;align-items:center;gap:14px;
    position:relative;overflow:hidden;cursor:pointer;
    transition:box-shadow 0.25s,transform 0.15s;
  }
  .solcast-card:hover { box-shadow:0 6px 30px rgba(0,0,0,0.6),0 0 20px rgba(245,158,11,0.1),inset 0 1px 0 rgba(255,255,255,0.04); }
  .solcast-card:active { transform:scale(0.97); }
  .solcast-card::before { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),transparent); }
  .sc-icon { font-size:26px;flex-shrink:0; }
  .sc-info { flex:1;min-width:0; }
  .sc-day  { font-size:10px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px;font-weight:700; }
  .sc-kwh  { font-family:'Share Tech Mono',monospace;font-size:26px;color:var(--amber);line-height:1; }
  .sc-unit { font-size:14px;color:var(--mut); }
  .sc-sub  { font-size:12px;margin-top:3px; }
  .sc-bar-wrap { width:72px;flex-shrink:0; }
  .sc-track { height:4px;background:var(--dim);border-radius:2px;overflow:hidden;margin-bottom:3px; }
  .sc-fill  { height:100%;border-radius:2px;background:linear-gradient(90deg,var(--amber),#fbbf24);transition:width 0.8s; }
  .sc-pct   { font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--mut);text-align:right; }

  .kpi-row   { display:grid;grid-template-columns:repeat(5,1fr);gap:10px; }
  .kpi-row-3 { display:grid;grid-template-columns:repeat(6,1fr);gap:10px; }
  .kpi {
    background:var(--sur); box-shadow:var(--sh-md);
    border-radius:var(--r); padding:14px 16px;
    position:relative;overflow:hidden;cursor:pointer;
    transition:box-shadow 0.25s,transform 0.15s;
  }
  .kpi:hover  { box-shadow:0 8px 32px rgba(0,0,0,0.6),0 0 18px rgba(16,185,129,0.08),inset 0 1px 0 rgba(255,255,255,0.05);transform:translateY(-2px); }
  .kpi:active { transform:scale(0.97); }
  .kpi-glow  { position:absolute;top:0;left:0;right:0;height:1px; }
  .kpi-label { font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--mut);margin-bottom:8px;min-height:18px; }
  .kpi-val   { font-family:'Share Tech Mono',monospace;font-size:26px;line-height:1;color:var(--txt); }
  .kpi-unit     { font-size:14px;color:var(--mut); }
  .kpi-state-lbl{ font-family:'Share Tech Mono',monospace;font-size:15px; }
  .kpi-sub-val  { font-family:'Share Tech Mono',monospace;font-size:13px; }
  .kpi-sub   { margin-top:6px;font-size:13px;color:var(--mut);display:flex;align-items:center;gap:5px; }
  .kpi-sdot  { width:5px;height:5px;border-radius:50%;flex-shrink:0; }
  .kpi-daily { position:absolute;top:14px;right:14px;font-family:'Share Tech Mono',monospace;font-size:14px;color:var(--mut); }
  .kpi-conso-daily { position:absolute;top:14px;right:14px;font-family:'Share Tech Mono',monospace;font-size:14px;color:var(--mut); }
  .c-acc{color:var(--acc)} .c-red{color:var(--red)} .c-blue{color:#60a5fa} .c-amb{color:var(--amber)} .c-txt{color:var(--txt)}

  .flux {
    background:var(--sur);box-shadow:var(--sh-md);border-radius:var(--r);
    overflow:hidden;display:grid;grid-template-columns:1fr 1fr;
  }
  .flux-col { background:transparent; }
  .flux-col-head {
    padding:14px 16px 12px;border-bottom:1px solid rgba(255,255,255,0.05);
    background:linear-gradient(135deg,rgba(245,158,11,0.06) 0%,transparent 70%);
  }
  .flux-col-head.conso { background:linear-gradient(135deg,rgba(16,185,129,0.05) 0%,transparent 70%); }
  .flux-eyebrow { font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--mut);display:flex;align-items:center;gap:8px;margin-bottom:6px; }
  .flux-dot { width:8px;height:8px;border-radius:50%;flex-shrink:0; }
  .flux-total { font-family:'Share Tech Mono',monospace;font-size:28px;font-weight:700;font-variant-numeric:tabular-nums;line-height:1; }
  .flux-list { padding:8px 12px 12px;display:flex;flex-direction:column;gap:5px; }
  .fx {
    display:grid;grid-template-columns:1fr 68px 62px;align-items:center;gap:8px;
    padding:9px 12px;border-radius:var(--ri);
    background:rgba(0,0,0,0.22);
    box-shadow:0 2px 6px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.03);
    cursor:pointer;transition:box-shadow 0.2s,transform 0.15s;
  }
  .fx:hover  { box-shadow:0 4px 14px rgba(0,0,0,0.5),0 0 10px rgba(16,185,129,0.06),inset 0 1px 0 rgba(255,255,255,0.04); }
  .fx:active { transform:scale(0.97); }
  .fx-name   { font-size:12px;font-weight:700;letter-spacing:0.5px;color:rgba(226,232,240,0.7); }
  .fx-panels { font-size:11px;color:var(--amber);opacity:0.8;margin-top:2px;font-family:'Share Tech Mono',monospace; }
  .fx-dch    { font-size:11px;color:var(--cyan);opacity:0.8;margin-top:1px;font-family:'Share Tech Mono',monospace; }
  .fx-daily  { font-size:11px;color:rgba(226,232,240,0.35);margin-top:1px;font-family:'Share Tech Mono',monospace; }
  .fx-bw     { height:2px;background:rgba(255,255,255,0.08);border-radius:1px;overflow:hidden; }
  .fx-bsp    { height:2px;background:rgba(255,255,255,0.08);border-radius:1px;overflow:hidden;display:flex;gap:1px; }
  .fx-bf     { height:100%;transition:width .6s; }
  .fx-v      { font-family:'Share Tech Mono',monospace;font-size:14px;font-weight:700;font-variant-numeric:tabular-nums;text-align:right; }
  .fx-vs     { display:flex;gap:4px;justify-content:flex-end;font-size:11px;font-weight:700;margin-top:2px;font-family:'Share Tech Mono',monospace; }
  .fc-band {
    background:linear-gradient(135deg,rgba(245,158,11,0.06) 0%,var(--sur) 50%);
    box-shadow:var(--sh-md);border-radius:var(--r);
    display:grid;grid-template-columns:1fr 1fr;overflow:hidden;
    margin-bottom:10px;
  }
  .fc-cell { padding:22px 20px 18px; }
  .fc-lbl  { font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center; }
  .fc-num  { font-family:'Share Tech Mono',monospace;font-size:30px;font-weight:700;font-variant-numeric:tabular-nums;margin-bottom:6px;line-height:1; }
  .fc-u    { font-size:14px;color:var(--mut);font-weight:400; }
  .fc-pr   { font-size:11px;color:var(--mut);margin-bottom:5px;font-family:'Share Tech Mono',monospace; }
  .fc-pb   { height:2px;background:rgba(255,255,255,0.08);border-radius:1px;margin-bottom:12px;overflow:hidden; }
  .fc-pf   { height:100%;border-radius:1px; }
  .fc-met  { display:flex;gap:16px;flex-wrap:wrap; }
  .fc-mi   { text-align:center; }
  .fc-miv  { font-size:12px;font-weight:700;margin-top:3px;font-variant-numeric:tabular-nums;font-family:'Share Tech Mono',monospace; }
  .fc-mil  { font-size:10px;color:var(--mut); }
  .fc-diff { font-size:10px;font-weight:700;padding:2px 8px;border:1px solid currentColor;font-family:'Share Tech Mono',monospace;border-radius:var(--ri); }
  #block-solcast:empty,#block-kpi:empty { display:none; }

  .bottom-1t { display:grid;grid-template-columns:1fr 240px 300px;gap:10px;align-items:start; }
  .bottom-23t-titans { display:grid;gap:10px; }
  .bottom-2t-titans  { grid-template-columns:1fr 1fr; }
  .bottom-3t-titans  { grid-template-columns:repeat(3,1fr); }

  .batt {
    background:linear-gradient(160deg,rgba(255,255,255,0.025) 0%,var(--sur) 40%);
    box-shadow:var(--sh-lg); border-radius:var(--r);
    padding:16px; position:relative;overflow:hidden;
  }
  .batt-top-bar  { position:absolute;top:0;left:0;right:0;height:3px; }

  .bat-header-row { display:flex;align-items:center;justify-content:space-between;margin-bottom:14px; }
  .bat-name { font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--mut);display:flex;align-items:center;gap:8px; }
  .bat-led-dot { width:8px;height:8px;border-radius:50%;flex-shrink:0; }
  .bat-body { display:grid;grid-template-columns:88px 1fr;gap:14px;align-items:center; }
  .bat-ring { width:88px;height:88px;position:relative;cursor:pointer;flex-shrink:0; }
  .bat-ring svg { position:absolute;inset:0;width:100%;height:100%; }
  .bat-soc-center { position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center; }
  .bat-soc-num { font-family:'Share Tech Mono',monospace;font-size:26px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums; }
  .bat-soc-pct { font-size:11px;color:var(--mut);font-family:'Share Tech Mono',monospace; }
  .bat-info { display:flex;flex-direction:column;gap:5px; }
  .bat-state-txt { font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;font-family:'Share Tech Mono',monospace; }
  .bat-power-txt { font-family:'Share Tech Mono',monospace;font-size:20px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;cursor:pointer; }
  .bat-power-txt:hover { text-decoration:underline; }
  .bat-time-strip {
    display:flex;align-items:center;gap:6px;
    font-family:'Share Tech Mono',monospace;font-size:11px;
    background:rgba(0,0,0,0.22);border-radius:var(--ri);
    padding:4px 10px;border-left:2px solid currentColor;margin-top:2px;
  }
  .bat-time-strip.chg { color:var(--acc); }
  .bat-time-strip.dch { color:var(--amber); }
  .bat-time-strip.idle { color:var(--mut); }
  .bat-meta-row { display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:12px;border-top:1px solid rgba(255,255,255,0.05);padding-top:10px; }
  .bm-cell { padding:8px;border-radius:var(--ri);background:rgba(0,0,0,0.25);box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);text-align:center;cursor:pointer;transition:box-shadow 0.2s,transform 0.1s; }
  .bm-cell:hover { box-shadow:inset 0 1px 3px rgba(0,0,0,0.5),0 0 10px rgba(16,185,129,0.06); }
  .bm-cell:active { transform:scale(0.96); }
  .bm-cell-lbl { font-size:10px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px;font-weight:700; }
  .bm-cell-val { font-family:'Share Tech Mono',monospace;font-size:14px;font-weight:700;font-variant-numeric:tabular-nums; }
  .bm-mode-line { grid-column:span 3;font-family:'Share Tech Mono',monospace;font-size:10px;color:var(--mut);text-align:center;padding-top:6px;border-top:1px solid rgba(255,255,255,0.05);margin-top:4px;letter-spacing:0.5px; }
  
  .batt-name-row { display:flex;align-items:center;gap:8px; }
  .batt-led      { width:8px;height:8px;border-radius:50%;animation:breathe 2.5s infinite; }
  .batt-name     { font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--mut); }
  .batt-btns { display:flex;flex-direction:row;gap:5px;align-items:flex-end; }
  .batt-btn {
    padding:5px 11px;border-radius:8px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
    border:none;cursor:pointer;font-family:'Share Tech Mono',monospace;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
    transition:box-shadow 0.15s,transform 0.1s,filter 0.15s;
    min-height:36px;
  }
  .batt-btn:hover  { filter:brightness(1.25); }
  .batt-btn:active { transform:scale(0.96); }
  .batt-btn-on  { background:rgba(16,185,129,0.18);color:var(--acc);box-shadow:0 0 10px rgba(16,185,129,0.2),0 2px 8px rgba(0,0,0,0.4); }
  .batt-btn-off { background:rgba(255,255,255,0.04);color:var(--mut); }
  .arc-wrap { display:flex;justify-content:center;margin:4px 0 10px; }
  .arc { position:relative;width:110px;height:58px;overflow:hidden; }
  .arc svg { position:absolute;inset:0; }
  .batt-state {
    display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-radius:var(--ri);
    background:rgba(0,0,0,0.22);
    box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);
    border-left:2px solid;margin-bottom:10px;
  }
  .bs-lbl  { font-size:11px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase; }
  .bs-time { font-size:11px;color:var(--mut);margin-top:2px; }
  .bs-pow  { font-family:'Share Tech Mono',monospace;font-size:16px;font-weight:700;cursor:pointer;min-height:36px;display:flex;align-items:center; }
  .bs-pow:hover { text-decoration:underline; }
  .batt-meta { display:grid;grid-template-columns:repeat(3,1fr);gap:7px; }
  .bm-item { padding:8px;border-radius:var(--ri);background:rgba(0,0,0,0.25);box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);text-align:center;cursor:pointer;transition:box-shadow 0.2s,transform 0.1s;min-height:36px; }
  .bm-item:hover  { box-shadow:inset 0 1px 3px rgba(0,0,0,0.5),0 0 10px rgba(16,185,129,0.06); }
  .bm-item:active { transform:scale(0.96); }
  .bm-label { font-size:10px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px;font-weight:700; }
  .bm-val   { font-family:'Share Tech Mono',monospace;font-size:15px;font-weight:700; }
  .links-section { margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.04); }
  .links-title   { font-size:10px;color:var(--mut);letter-spacing:2px;text-transform:uppercase;margin-bottom:7px;font-weight:700; }
  .link-row  { display:flex;align-items:center;gap:7px;margin-bottom:5px; }
  .link-n    { font-size:12px;color:var(--mut);width:44px;flex-shrink:0;font-family:'Share Tech Mono',monospace; }
  .link-trk  { flex:1;height:4px;background:rgba(0,0,0,0.3);border-radius:2px;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,0.5); }
  .link-fill { height:100%;border-radius:2px;transition:width 0.8s; }
  .link-pct  { font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--mut);width:30px;text-align:right; }
  .link-tmp  { font-size:12px;color:var(--mut);width:36px;text-align:right;font-family:'Share Tech Mono',monospace; }

  .cluster-panel {
    background:var(--sur); box-shadow:var(--sh-md);
    border-radius:var(--r); padding:16px;
    display:flex;flex-direction:column;gap:10px;
  }
  .cluster-panel-row {
    background:var(--sur); box-shadow:var(--sh-md);
    border-radius:var(--r); padding:14px 16px;
    display:grid;grid-template-columns:1.2fr 1fr 1fr auto;gap:14px;align-items:end;
  }
  .cluster-title { font-size:11px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:var(--mut);margin-bottom:3px; }
  .cluster-group { display:flex;flex-direction:column;gap:5px; }
  .cluster-label { font-size:11px;color:var(--mut);letter-spacing:1px;text-transform:uppercase;font-weight:600; }
  .cluster-select {
    padding:9px 11px;border-radius:var(--ri);
    background:rgba(0,0,0,0.3);
    box-shadow:inset 0 2px 4px rgba(0,0,0,0.5),0 1px 0 rgba(255,255,255,0.02);
    border:none;font-family:'Share Tech Mono',monospace;font-size:13px;color:var(--txt);width:100%;cursor:pointer;min-height:36px;
  }
  .cluster-select:focus { outline:none;box-shadow:inset 0 2px 4px rgba(0,0,0,0.5),0 0 0 2px rgba(16,185,129,0.3); }
  .cluster-range { width:100%;accent-color:var(--acc);cursor:pointer; }
  .cluster-btn {
    padding:10px 12px;border-radius:var(--ri);
    background:rgba(0,0,0,0.25);
    box-shadow:0 2px 8px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02);
    border:none;font-family:'Share Tech Mono',monospace;font-size:11px;font-weight:700;letter-spacing:1px;
    text-transform:uppercase;color:var(--mut);text-align:center;cursor:pointer;
    transition:box-shadow 0.15s,transform 0.1s,color 0.15s;
    min-height:36px;
  }
  .cluster-btn:hover  { box-shadow:0 4px 14px rgba(0,0,0,0.6),0 0 12px rgba(16,185,129,0.1);color:var(--acc); }
  .cluster-btn:active { transform:scale(0.96); }
  .cluster-btn-chg-active { background:rgba(16,185,129,0.1);color:var(--acc);box-shadow:0 0 14px rgba(16,185,129,0.2),0 2px 8px rgba(0,0,0,0.5); }
  .cluster-btn-dch-active { background:rgba(6,182,212,0.1);color:var(--cyan);box-shadow:0 0 14px rgba(6,182,212,0.2),0 2px 8px rgba(0,0,0,0.5); }

  .roi-btn {
    background:linear-gradient(135deg,rgba(16,185,129,0.06) 0%,var(--sur) 60%);
    box-shadow:var(--sh-md); border-radius:var(--r);
    padding:14px 18px; display:flex;align-items:center;justify-content:space-between;gap:14px;
    cursor:pointer;transition:box-shadow 0.25s,transform 0.15s;
  }
  .roi-btn:hover  { box-shadow:0 8px 32px rgba(0,0,0,0.6),0 0 20px rgba(16,185,129,0.1),inset 0 1px 0 rgba(255,255,255,0.04);transform:translateY(-1px); }
  .roi-btn:active { transform:scale(0.98); }
  .roi-btn-left  { display:flex;flex-direction:column;gap:3px; }
  .roi-btn-title { font-size:11px;font-weight:800;letter-spacing:2.5px;text-transform:uppercase;color:var(--acc); }
  .roi-btn-sub   { font-size:11px;color:var(--mut);letter-spacing:0.5px; }
  .roi-btn-vals  { display:flex;gap:16px;font-family:'Share Tech Mono',monospace;font-size:14px;flex-wrap:wrap; }
  .roi-btn-open  {
    padding:7px 16px;border-radius:9px;
    background:rgba(16,185,129,0.1);color:var(--acc);
    box-shadow:0 0 12px rgba(16,185,129,0.15),0 2px 8px rgba(0,0,0,0.4);
    border:none;font-size:11px;font-weight:700;letter-spacing:1.5px;
    font-family:'Share Tech Mono',monospace;white-space:nowrap;flex-shrink:0;cursor:pointer;min-height:36px;
  }

  .roi-overlay {
    position:fixed;inset:0;background:rgba(0,0,0,0.82);backdrop-filter:blur(14px);z-index:9998;
    display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.25s;
  }
  .roi-overlay.open { opacity:1;pointer-events:all; }
  .roi-modal {
    background:radial-gradient(ellipse at 30% 0%,rgba(16,185,129,0.05) 0%,transparent 55%),var(--sur2);
    box-shadow:0 32px 80px rgba(0,0,0,0.8),0 8px 16px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.04);
    border-radius:20px;padding:20px;
    width:760px;max-width:96vw;
    transform:translateY(20px);transition:transform 0.25s;display:flex;flex-direction:column;gap:14px;
  }
  .roi-overlay.open .roi-modal { transform:translateY(0); }
  .roi-modal-head  { display:flex;align-items:center;justify-content:space-between; }
  .roi-modal-title { font-size:12px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--acc); }
  .roi-modal-close {
    background:rgba(0,0,0,0.3);box-shadow:0 2px 8px rgba(0,0,0,0.5);
    border:none;color:var(--mut);border-radius:8px;width:30px;height:30px;
    cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;
    transition:color 0.15s,box-shadow 0.15s;
  }
  .roi-modal-close:hover { color:var(--txt);box-shadow:0 0 12px rgba(255,255,255,0.1); }
  .ptabs { display:flex;gap:5px; }
  .ptab {
    padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
    background:rgba(0,0,0,0.3);color:var(--mut);cursor:pointer;
    box-shadow:0 2px 6px rgba(0,0,0,0.4);border:none;
    font-family:'Syne',sans-serif;transition:box-shadow 0.15s,color 0.15s,transform 0.1s;
  }
  .ptab:hover  { color:#888;box-shadow:0 4px 12px rgba(0,0,0,0.5); }
  .ptab:active { transform:scale(0.95); }
  .ptab.active { background:var(--acc);color:#000;font-weight:800;box-shadow:0 0 16px rgba(16,185,129,0.3),0 2px 8px rgba(0,0,0,0.5); }
  .roi-kpis { display:grid;grid-template-columns:1fr 1fr;gap:10px; }
  .roi-kpi  {
    padding:12px;border-radius:var(--ri);
    background:rgba(0,0,0,0.22);box-shadow:inset 0 1px 3px rgba(0,0,0,0.4);
    cursor:pointer;transition:box-shadow 0.2s,transform 0.1s;
  }
  .roi-kpi:hover  { box-shadow:inset 0 1px 3px rgba(0,0,0,0.4),0 0 14px rgba(16,185,129,0.07); }
  .roi-kpi:active { transform:scale(0.97); }
  .rk-label { font-size:10px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;font-weight:700; }
  .rk-val   { font-family:'Share Tech Mono',monospace;font-size:22px;font-weight:700;line-height:1;white-space:nowrap; }
  .roi-bars { display:flex;flex-direction:column;gap:8px; }
  .rbar-row { display:flex;align-items:center;gap:8px; }
  .rbar-lbl { font-size:12px;color:var(--mut);width:76px;flex-shrink:0; }
  .rbar-trk { flex:1;height:5px;background:rgba(0,0,0,0.3);border-radius:3px;overflow:hidden;display:flex;box-shadow:inset 0 1px 2px rgba(0,0,0,0.5); }
  .rbar-seg { height:100%; }
  .rbar-val { font-family:'Share Tech Mono',monospace;font-size:12px;color:var(--mut);width:54px;text-align:right; }
  .roi-footer { padding-top:10px;border-top:1px solid rgba(255,255,255,0.04);display:flex;justify-content:space-between;font-size:13px;color:var(--mut); }

  .modal-overlay {
    position:fixed;inset:0;background:rgba(0,0,0,0.82);backdrop-filter:blur(14px);z-index:9999;
    display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.25s;
  }
  .modal-overlay.open { opacity:1;pointer-events:all; }
  .modal {
    background:var(--sur2);
    box-shadow:0 32px 80px rgba(0,0,0,0.8),0 8px 16px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.04);
    border-radius:20px;padding:16px;
    width:700px;max-width:95vw;
    transform:translateY(20px);transition:transform 0.25s;display:flex;flex-direction:column;gap:12px;
  }
  .modal-overlay.open .modal { transform:translateY(0); }
  .modal-head { display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:40px; }
  .modal-name  { font-size:14px;font-weight:700;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:0.5px; }
  .modal-close {
    background:rgba(0,0,0,0.3);box-shadow:0 2px 8px rgba(0,0,0,0.5);
    border:none;color:var(--mut);border-radius:8px;width:30px;height:30px;
    cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;
    transition:color 0.15s,box-shadow 0.15s;
  }
  .modal-close:hover { color:var(--txt);box-shadow:0 0 12px rgba(255,255,255,0.1); }

  @container (max-width: 600px) {

    .card { padding:10px; gap:8px; font-size:16px; }

    /* HEADER */
    .header { flex-direction:column; gap:8px; padding:10px; align-items:flex-start; }
    .tempo-chips { width:100%; justify-content:flex-start; gap:6px; flex-wrap:wrap; }
    .jours { flex-wrap:wrap; gap:8px; font-size:13px; }

    /* SOLCAST */
    .solcast-row { grid-template-columns:1fr; }

    /* KPI */
    .kpi-row { grid-template-columns:1fr 1fr; }
    .kpi-row-dyn { grid-template-columns:1fr 1fr !important; }
    .kpi-val { font-size:23px; }
    .kpi-daily { position:static; display:block; font-size:13px; margin-top:5px; }

    /* FLUX */
    .flux { grid-template-columns:1fr; gap:8px; }
    .flux-center { flex-direction:row; justify-content:space-between; align-items:center; padding:4px 0; }
    .house-ring { width:70px; height:70px; }
    .house-ring svg { width:70px; height:70px; }
    .house-inner { font-size:13px; }
    .house-val { font-size:12px; }
    .house-ico { font-size:19px; }

    /* CLUSTER */
    .cluster-panel-row { grid-template-columns:1fr 1fr; gap:8px; }
    .cluster-group:last-child { grid-column:span 2; }

    /* BOTTOM : titans en colonne unique */
    .bottom-2t-titans { grid-template-columns:1fr !important; }
    .bottom-3t-titans { grid-template-columns:1fr !important; }
    .bottom-1t        { grid-template-columns:1fr !important; }

    /* TITAN */
    .batt { padding:10px; }
    .batt-soc { font-size:29px; }
    .arc { width:140px; height:72px; }
    .arc svg { width:140px !important; height:72px !important; }
    .arc-wrap { margin:6px 0 12px; }
    .batt-meta { grid-template-columns:1fr 1fr 1fr; }
    .bm-val { font-size:14px; }

    /* ROI */
    .roi-btn { padding:10px 12px; }
    .roi-btn-vals { font-size:13px; gap:8px; }
    .roi-kpis { grid-template-columns:1fr 1fr; }
    .rk-val { font-size:17px; }

    /* KPI inline overrides mobile */
    .kpi-state-lbl { font-size:13px; }
    .kpi-sub-val   { font-size:12px; }
    .kpi-conso-daily { position:static; display:block; font-size:13px; margin-top:4px; }
  }
`;

class SolaireDashboardCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this._hass                = null;
    this._config              = {};
    this._period              = 'daily';
    this._shellReady          = false;
    this._controlsInteracting = false;
    this._prevControlsVals    = null;
  }

  static getConfigElement() { return document.createElement('solaire-dashboard-card-editor'); }
  static getStubConfig()    { return {sensors:{}, titan_count:2, mo_count:1, show_roi:true, show_tempo_jours:true}; }
  setConfig(c) { this._config = c; }

  set hass(h) {
    this._hass = h;
    if (!this._shellReady) {
      this._renderShell();
    } else {
      this._updateBlocks();
    }
  }

  
  _id(key) {
    if(key && (key.startsWith('sensor.')||key.startsWith('switch.')||key.startsWith('number.')||key.startsWith('select.')||key.startsWith('button.'))) return key;
    return this._config.sensors?.[key] || DEFAULTS[key] || '';
  }
  _s(key, fb=0) {
    const st = this._hass?.states[this._id(key)]?.state;
    if(!st||['unavailable','unknown','none'].includes(st)) return fb;
    const v=parseFloat(st); return isNaN(v)?fb:v;
  }
  _str(key, fb='—') {
    const st=this._hass?.states[this._id(key)]?.state;
    return(!st||['unavailable','unknown'].includes(st))?fb:st;
  }
  _pw(w) { return Math.abs(w)>=1000?`${(w/1000).toFixed(1)} kW`:`${Math.round(w)} W`; }
  _time(min) {
    if(!min||min<=0||min>=9999) return null;
    const h=Math.floor(min/60),m=Math.round(min%60);
    return h>0?`${h}h${String(m).padStart(2,'0')}`:`${m} min`;
  }
  _socColor(soc)  { return soc>60?'var(--acc)':soc>30?'var(--amber)':'var(--red)'; }
  _fop(w)         { return w<=0?'opacity:0.3;':''; }
  _pvColor(w)     { if(w<=0) return 'var(--mut)'; if(w<250) return 'var(--red)'; if(w<400) return 'var(--amber)'; return 'var(--acc)'; }
  _uvColor(uv)    { return uv<=2?'#4ade80':uv<=5?'var(--amber)':uv<=7?'#f97316':uv<=10?'var(--red)':'#a855f7'; }
  _tempColor(t)   { return t<5?'#60a5fa':t<15?'var(--cyan)':t<25?'var(--acc)':t<35?'var(--amber)':'var(--red)'; }
  _chipCls(c)     { const v=c?.toLowerCase(); return ['bleu','blanc','rouge'].includes(v)?`chip-${v}`:'chip-unknown'; }
  _chipLbl(c)     { return {bleu:'● BLEU',blanc:'● BLANC',rouge:'● ROUGE'}[c?.toLowerCase()]||'—'; }
  _titanCount()   { return parseInt(this._config.titan_count)||2; }
  _moCount()      { const v=parseInt(this._config.mo_count); return isNaN(v)?1:v; }

  
  _openMoreInfo(entityId, event) {
    if(event) { event.stopPropagation(); event.preventDefault(); }
    if(!entityId) return;
    const e = new Event('hass-more-info', { bubbles: true, composed: true });
    e.detail = { entityId };
    this.dispatchEvent(e);
  }

  
  _arcSvg(soc, color) {
    const total=157, off=total-(soc/100*total);
    return `<svg viewBox="0 0 120 64" width="110" height="58">
      <path d="M 10 60 A 50 50 0 0 1 110 60" fill="none" stroke="#1e2936" stroke-width="8" stroke-linecap="round"/>
      <path d="M 10 60 A 50 50 0 0 1 110 60" fill="none" stroke="${color}" stroke-width="8"
        stroke-linecap="round" stroke-dasharray="${total}" stroke-dashoffset="${off}"
        style="filter:drop-shadow(0 0 4px ${color})"/>
    </svg>`;
  }

  _ringCircleSvg(soc, color) {
    const circ = 232.5;
    const off  = circ * (1 - soc / 100);
    return `<svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="44" cy="44" r="37" stroke="#1e2936" stroke-width="5"/>
      <circle cx="44" cy="44" r="37" stroke="${color}" stroke-width="5"
        stroke-dasharray="${circ}" stroke-dashoffset="${off.toFixed(1)}"
        stroke-linecap="square" transform="rotate(-90 44 44)"
        style="filter:drop-shadow(0 0 4px ${color});transition:stroke-dashoffset 0.8s ease"/>
    </svg>`;
  }

  
  _titan(label, accentColor, socKey, stateKey, chgKey, dchKey, tempKey, chgTimeKey, dchTimeKey, alarmKey, modeKey, links, dcOutKey, ledSwKey, ledStKey, offgridSwKey, offgridStKey, titanIndex, capacityKey, epsKey, rssiKey, cyclesKey, mqttKey, wifiIpKey, wifiSsidKey) {
    const linksOpen    = localStorage.getItem(`solaire-links-t${titanIndex}-open`) === 'true';
    const soc          = this._s(socKey);
    const capacityId   = this._id(capacityKey);
    const hasCapacity  = !!(capacityId && this._hass?.states[capacityId]);
    const capacityKwh  = hasCapacity ? this._s(capacityKey) : 0;
    const energyPresent= hasCapacity ? (capacityKwh * soc / 100) : 0;
    const eps          = this._s(epsKey, 0);
    const energyUsable = hasCapacity ? Math.max(energyPresent - (capacityKwh * eps / 100), 0) : 0;
    const rawState   = this._str(stateKey,'idle').toLowerCase().replace('static','idle');
    const dcOut      = this._s(dcOutKey);
    const isChg      = rawState==='charging' || (rawState==='idle' && dcOut>0);
    const isDch      = rawState==='discharging';
    const acChg      = this._s(chgKey);
    const chgMixte   = isChg && acChg>0 && dcOut>0;
    const chgSolaire = isChg && acChg===0 && dcOut>0;
    const chgAC      = isChg && acChg>0 && dcOut===0;
    const power      = isDch?this._s(dchKey):chgMixte?acChg+dcOut:chgSolaire?dcOut:chgAC?acChg:0;
    const temp       = this._s(tempKey);
    const chgTime    = this._s(chgTimeKey,0);
    const dchTime    = this._s(dchTimeKey,0);
    const alarm      = this._str(alarmKey,'No Alarm');
    const mode       = this._str(modeKey,'—');
    const hasAlarm   = alarm!=='No Alarm'&&alarm!=='—';
    const socC       = this._socColor(soc);
    const ledOn      = this._str(ledStKey,'off').toLowerCase()==='on';
    const offgridOn  = this._str(offgridStKey,'off').toLowerCase()==='on';
    const ledSwId    = this._id(ledSwKey);
    const offgridSwId= this._id(offgridSwKey);
    const socId      = this._id(socKey);
    const tmpId      = this._id(tempKey);

    let stateInfo='';
    if(hasCapacity && power>0) {
      if(isChg) {
        const remainKwh = Math.max(capacityKwh - energyPresent, 0);
        const estMin    = Math.round(remainKwh * 60000 / power);
        if(estMin>0 && estMin<9999) stateInfo = `${this._time(estMin)} avant 100%`;
      } else if(isDch) {
        const estMin = Math.round(energyUsable * 60000 / power);
        if(estMin>0 && estMin<9999) stateInfo = `${this._time(estMin)} avant SOC min`;
      }
    } else {
      if(isChg && chgTime>0 && chgTime<9999)
        stateInfo = `Full dans ${this._time(chgTime)}`;
      else if(isDch && dchTime>0 && dchTime<9999 && soc>eps)
        stateInfo = `SOC min dans ${this._time(Math.round(dchTime*(soc-eps)/Math.max(soc,1)))}`;
    }

    const stateLabel=isDch?'⟳ Décharge':chgMixte?'⚡ Charge Mixte':chgSolaire?'⚡ Charge Solaire':chgAC?'⚡ Charge':'⏸ Veille';
    const bsColor   =isDch?'var(--cyan)':isChg?'var(--acc)':'var(--mut)';

    const linksHtml=(links||[]).map((l,i)=>{
      const ls=this._s(this._id(l.soc),null), lt=this._s(this._id(l.temp),null);
      if(ls===null&&lt===null) return '';
      const lc=this._socColor(ls??0);
      return `<div class="link-row">
        <span class="link-n">LINK ${i+1}</span>
        <div class="link-trk"><div class="link-fill" style="width:${ls??0}%;background:${lc}"></div></div>
        <span class="link-pct">${ls!==null?ls+'%':'—'}</span>
        <span class="link-tmp">${lt!==null?lt+'°C':'—'}</span>
      </div>`;
    }).join('');

    // Barre top : gradient statique selon état
    let topBarStyle;
    if(isChg)      topBarStyle=`background:linear-gradient(90deg,${accentColor},${accentColor}33);box-shadow:0 0 8px ${accentColor}88`;
    else if(isDch) topBarStyle=`background:linear-gradient(90deg,var(--cyan),rgba(34,211,238,0.2));box-shadow:0 0 8px rgba(34,211,238,0.5)`;
    else           topBarStyle=`background:${accentColor}33`;

    const ledDotColor = isChg ? accentColor : isDch ? 'var(--cyan)' : 'rgba(148,180,210,0.25)';
    const timeClass   = isChg ? 'chg' : isDch ? 'dch' : 'idle';

    return `<div class="batt">
      <div class="batt-top-bar" style="${topBarStyle}"></div>

      <div class="bat-header-row">
        <div class="bat-name">
          <div class="bat-led-dot" style="background:${ledDotColor};box-shadow:0 0 6px ${ledDotColor}"></div>
          ${label}
          ${hasAlarm?`<span style="font-size:13px;color:var(--amber)">⚠ ${alarm}</span>`:''}
        </div>
        <div class="batt-btns">
          <button class="batt-btn ${ledOn?'batt-btn-on':'batt-btn-off'}"
            onclick="this.getRootNode().host._hass.callService('switch','toggle',{entity_id:'${ledSwId}'})">LED</button>
          <button class="batt-btn ${offgridOn?'batt-btn-on':'batt-btn-off'}"
            onclick="this.getRootNode().host._hass.callService('switch','toggle',{entity_id:'${offgridSwId}'})">OFF-GRID</button>
        </div>
      </div>

      <div class="bat-body">
        <div class="bat-ring" onclick="this.getRootNode().host._openMoreInfo('${socId}',event)">
          ${this._ringCircleSvg(soc, isChg ? accentColor : isDch ? 'var(--cyan)' : socC)}
          <div class="bat-soc-center">
            <div class="bat-soc-num" style="color:${isChg ? accentColor : isDch ? 'var(--cyan)' : socC}">${soc}</div>
            <div class="bat-soc-pct">%</div>
          </div>
        </div>
        <div class="bat-info">
          <div class="bat-state-txt" style="color:${bsColor}">${stateLabel}</div>
          <div class="bat-power-txt" style="color:${bsColor}"
            onclick="this.getRootNode().host._openMoreInfo('${this._id(isChg?chgKey:dchKey)}',event)">
            ${power>0?(isChg?'+':'')+this._pw(power):'—'}
          </div>
          ${stateInfo?`<div class="bat-time-strip ${timeClass}">⏱ ${stateInfo}</div>`:''}
        </div>
      </div>

      <div class="bat-meta-row">
        <div class="bm-cell" onclick="this.getRootNode().host._openMoreInfo('${tmpId}',event)">
          <div class="bm-cell-lbl">Temp.</div>
          <div class="bm-cell-val" style="color:${accentColor}">${temp>0?temp+'°C':'—'}</div>
        </div>
        ${(() => {
          const rssiId = this._id(rssiKey);
          if (!rssiId || !this._hass?.states[rssiId]) return `<div class="bm-cell"><div class="bm-cell-lbl">WiFi</div><div class="bm-cell-val" style="color:var(--mut)">—</div></div>`;
          const rssi = this._s(rssiKey, null);
          if (rssi === null) return `<div class="bm-cell"><div class="bm-cell-lbl">WiFi</div><div class="bm-cell-val" style="color:var(--mut)">—</div></div>`;
          const c = rssi >= -50 ? 'var(--acc)' : rssi >= -65 ? 'var(--cyan)' : rssi >= -75 ? 'var(--amber)' : rssi >= -85 ? '#f97316' : 'var(--red)';
          const mqttVal = this._str(mqttKey, '—');
          const ipVal   = this._str(wifiIpKey, '—');
          const ssidVal = this._str(wifiSsidKey, '—');
          return `<div class="bm-cell" onclick="this.getRootNode().host._openWifiModal('${label}',${rssi},'${mqttVal}','${ipVal}','${ssidVal}',event)">
            <div class="bm-cell-lbl">WiFi</div>
            <div class="bm-cell-val" style="color:${c}">${rssi} dBm</div>
          </div>`;
        })()}
        <div class="bm-cell">
          <div class="bm-cell-lbl">EPS · Cycles</div>
          <div class="bm-cell-val" style="color:var(--mut)">${eps}%${(() => {
            const cyclesId = this._id(cyclesKey);
            if (!cyclesId || !this._hass?.states[cyclesId]) return '';
            const cycles = this._s(cyclesKey, null);
            return cycles !== null ? ` · ${Math.round(cycles)}` : '';
          })()}</div>
        </div>
        <div class="bm-mode-line">${mode}${hasCapacity?` · ${energyPresent.toFixed(1)} kWh présent · ${energyUsable.toFixed(1)} kWh utile · ${capacityKwh.toFixed(1)} kWh cap.`:''}</div>
      </div>

      ${linksHtml?`<div class="links-section">
        <div id="links-arrow-t${titanIndex}" style="cursor:pointer;display:flex;align-items:center;gap:6px;user-select:none" class="links-title">
          <span id="links-arrow-icon-t${titanIndex}">${linksOpen?'▼':'▶'}</span>🔗 Link Batteries
        </div>
        <div id="links-body-t${titanIndex}" style="display:${linksOpen?'block':'none'}">${linksHtml}</div>
      </div>`:''}
    </div>`;
  }

  
  _clusterPanel(tc, modePilotage) {
    const modeSensorId = this._id('cluster_mode_sensor');
    const socMinId    = this._id('cluster_soc_min');
    const chgPowId    = this._id('cluster_chg_pow');
    const dchPowId    = this._id('cluster_dch_pow');
    const forcedSocId = this._id('cluster_forced_soc');
    const forcedPowId = this._id('cluster_forced_pow');
    const forceChgId  = this._id('cluster_force_chg');
    const forceDchId  = this._id('cluster_force_dch');
    const standbyId   = this._id('cluster_standby');

    const modeVal     = this._str('cluster_mode_sensor','—');
    const socMinVal   = this._s('cluster_soc_min',10);
    const chgPowVal   = this._s('cluster_chg_pow',0);
    const dchPowVal   = this._s('cluster_dch_pow',0);
    const forcedSocVal= this._s('cluster_forced_soc',20);
    const forcedPowVal= this._s('cluster_forced_pow',0);

    const forceChgOn  = false;
    const forceDchOn  = false;

    const modeBtns = this._config.cluster_mode_buttons || [];
    const modeOptionsHtml = modeBtns.length > 0
      ? modeBtns.map(b => {
          const isActive = modeVal.toLowerCase().includes(b.label.toLowerCase()) ||
                           b.label.toLowerCase().includes(modeVal.toLowerCase());
          return `<option value="${b.entity}" ${isActive?'selected':''}>${b.label}</option>`;
        }).join('')
      : `<option value="" disabled selected>${modeVal||'— Aucun mode configuré —'}</option>`;

    const cN  = (id) => `this.getRootNode().host._hass.callService('number','set_value',{entity_id:'${id}',value:parseFloat(this.value)})`;
    const cSw = (id) => `this.getRootNode().host._hass.callService('button','press',{entity_id:'${id}'})`;

    return `<div class="cluster-panel-row">

      <div class="cluster-group" style="min-width:0">
        <div class="cluster-label" style="font-size:12px;font-weight:700;letter-spacing:2px;color:var(--acc);margin-bottom:6px">⚙ CONTROLES</div>
        <div class="cluster-label">Working Mode <span style="color:var(--acc);font-family:'Share Tech Mono',monospace">${modeVal!=='—'?'· '+modeVal:''}</span></div>
        <select class="cluster-select" id="cluster-mode-select">
          ${modeOptionsHtml}
        </select>
        <div class="cluster-label" style="margin-top:8px">SOC Min — <span id="cl-socmin-lbl">${socMinVal}%</span></div>
        <input type="range" class="cluster-range" min="5" max="100" step="5" value="${socMinVal}"
          oninput="this.getRootNode().host.shadowRoot.getElementById('cl-socmin-lbl').textContent=this.value+'%'"
          onchange="${cN(socMinId)}"/>
      </div>

      <div class="cluster-group" style="min-width:0">
        <div class="cluster-label">Puissance Charge — <span id="cl-chg-lbl">${this._pw(chgPowVal)}</span></div>
        <input type="range" class="cluster-range" min="0" max="${tc*2400}" step="50" value="${chgPowVal}"
          oninput="this.getRootNode().host.shadowRoot.getElementById('cl-chg-lbl').textContent=this.value+'W'"
          onchange="${cN(chgPowId)}"/>
        <div class="cluster-label" style="margin-top:8px">Puissance Décharge — <span id="cl-dch-lbl">${this._pw(dchPowVal)}</span></div>
        <input type="range" class="cluster-range" min="0" max="${modePilotage==='MR1'?2400:tc*2400}" step="50" value="${dchPowVal}"
          oninput="this.getRootNode().host.shadowRoot.getElementById('cl-dch-lbl').textContent=this.value+'W'"
          onchange="${cN(dchPowId)}"/>
      </div>

      <div class="cluster-group" style="min-width:0;border-left:1px solid var(--dim);padding-left:12px">
        <div class="cluster-label" style="color:var(--acc);margin-bottom:6px">⚡ Charge / Décharge forcée</div>
        <div class="cluster-label">SOC cible — <span id="cl-fsoc-lbl">${forcedSocVal}%</span></div>
        <input type="range" class="cluster-range" min="5" max="100" step="5" value="${forcedSocVal}"
          oninput="this.getRootNode().host.shadowRoot.getElementById('cl-fsoc-lbl').textContent=this.value+'%'"
          onchange="${cN(forcedSocId)}"/>
        <div class="cluster-label" style="margin-top:8px">Puissance manuelle — <span id="cl-fpow-lbl">${this._pw(forcedPowVal)}</span></div>
        <input type="range" class="cluster-range" min="0" max="${tc*2400}" step="100" value="${forcedPowVal}"
          oninput="this.getRootNode().host.shadowRoot.getElementById('cl-fpow-lbl').textContent=this.value+'W'"
          onchange="${cN(forcedPowId)}"/>
      </div>

      <div class="cluster-group" style="display:flex;flex-direction:column;gap:8px;justify-content:flex-end;min-width:0">
        <button class="cluster-btn" onclick="${cSw(standbyId)}" style="background:rgba(245,158,11,0.1);color:var(--amber);border-color:rgba(245,158,11,0.3)">⏸ Standby</button>
        <button class="cluster-btn cluster-btn-chg-active" onclick="${cSw(forceChgId)}">⚡ Forcer Charge</button>
        <button class="cluster-btn cluster-btn-dch-active" onclick="${cSw(forceDchId)}">⟳ Forcer Décharge</button>
      </div>
    </div>`;
  }


  _renderShell() {
    const pLabels = {daily:'J',weekly:'S',monthly:'M',yearly:'A'};
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
    <div class="card">
      <div id="block-header"></div>
      <div id="block-flux"></div>
      <div id="block-titans"></div>
      <div id="block-controls"></div>
      <div id="block-roi"></div>
    </div>

    <div class="roi-overlay" id="roi-overlay">
      <div class="roi-modal">
        <div class="roi-modal-head">
          <div class="roi-modal-title">📊 ROI & Économies</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="ptabs">
              ${['daily','weekly','monthly','yearly'].map(pp=>`
                <button class="ptab${this._period===pp?' active':''}" data-p="${pp}">${pLabels[pp]}</button>
              `).join('')}
            </div>
            <button class="roi-modal-close" id="roi-close-btn">✕</button>
          </div>
        </div>
        <div id="roi-modal-body" style="width:100%;min-width:0;"></div>
      </div>
    </div>

    <div class="modal-overlay" id="wifi-modal-overlay">
      <div class="modal" style="width:420px">
        <div class="modal-head">
          <span class="modal-name" id="wifi-modal-title"></span>
          <button class="modal-close" id="wifi-modal-close-btn">✕</button>
        </div>
        <div id="wifi-modal-rows" style="display:flex;flex-direction:column"></div>
      </div>
    </div>`;

    this.shadowRoot.getElementById('roi-close-btn')
      .addEventListener('click', () => this._closeRoiModal());
    this.shadowRoot.getElementById('wifi-modal-close-btn')
      .addEventListener('click', () => this._closeWifiModal());

    this.shadowRoot.querySelectorAll('.ptab').forEach(btn =>
      btn.addEventListener('click', e => {
        this._period = e.currentTarget.dataset.p;
        this.shadowRoot.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this._updateRoiModalContent();
        this.shadowRoot.getElementById('roi-overlay')?.classList.add('open');
      }));

    const ctrl = this.shadowRoot.getElementById('block-controls');
    const setOn  = () => { this._controlsInteracting = true; };
    const setOff = () => {
      this._controlsInteracting = false;
      this._attachControlsListeners();
    };
    ctrl.addEventListener('mousedown',  setOn);
    ctrl.addEventListener('touchstart', setOn, {passive:true});
    ctrl.addEventListener('mouseup',    setOff);
    ctrl.addEventListener('touchend',   setOff);

    this._shellReady = true;
    this._updateBlocks();
  }

  _updateBlocks() {
    if (!this._hass) return;
    const roiOpen   = this.shadowRoot.getElementById('roi-overlay')?.classList.contains('open');
    if (roiOpen) return;

    this._updateBlock('block-header',  this._htmlHeader());
    this._updateBlock('block-flux',    this._htmlFlux());
    this._updateBlock('block-titans',  this._htmlTitans());
    this._attachTitansListeners();
    this._updateControlsBlock();
    this._updateBlock('block-roi',     this._htmlRoi());
    this._updateRoiModalContent();
  }

  _updateBlock(id, html) {
    const el = this.shadowRoot.getElementById(id);
    if (el) el.innerHTML = html;
  }

  _updateControlsBlock() {
    const current = JSON.stringify(this._getControlsValues());
    const changed  = current !== this._prevControlsVals;
    if (changed && !this._controlsInteracting) {
      this._updateBlock('block-controls', this._htmlControls());
      this._attachControlsListeners();
      this._prevControlsVals = current;
    }
  }

  _getControlsValues() {
    return {
      modeVal:      this._str('cluster_mode_sensor','—'),
      socMinVal:    this._s('cluster_soc_min', 10),
      chgPowVal:    this._s('cluster_chg_pow', 0),
      dchPowVal:    this._s('cluster_dch_pow', 0),
      forcedSocVal: this._s('cluster_forced_soc', 20),
      forcedPowVal: this._s('cluster_forced_pow', 0),
    };
  }

  _attachControlsListeners() {
    const modeSelect = this.shadowRoot.getElementById('cluster-mode-select');
    if (modeSelect) {
      modeSelect.addEventListener('change', e => {
        const entityId = e.target.value;
        if (entityId && entityId.startsWith('button.')) {
          this._hass.callService('button', 'press', {entity_id: entityId});
        }
      });
    }
  }

  _attachTitansListeners() {
    [1,2,3].forEach(i => {
      const arrow = this.shadowRoot.getElementById(`links-arrow-t${i}`);
      if (!arrow) return;
      arrow.replaceWith(arrow.cloneNode(true));
      const freshArrow = this.shadowRoot.getElementById(`links-arrow-t${i}`);
      if (!freshArrow) return;
      freshArrow.addEventListener('click', () => {
        const body = this.shadowRoot.getElementById(`links-body-t${i}`);
        const icon = this.shadowRoot.getElementById(`links-arrow-icon-t${i}`);
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        icon.textContent   = isOpen ? '▶' : '▼';
        localStorage.setItem(`solaire-links-t${i}-open`, String(!isOpen));
      });
    });
  }

  _updateRoiModalContent() {
    const body = this.shadowRoot.getElementById('roi-modal-body');
    if (!body) return;
    const p = this._period;
    const roiSolarBase  = this._id('roi_solar');
    const roiBattBase   = this._id('roi_battery');
    const roiPeakBase   = this._id('roi_peak_shaving');
    const roiCostBase   = this._id('roi_charge_cost');
    const roiAutoBase   = this._id('roi_autosuff');
    const solEco    = roiSolarBase ? this._s(roiSolarBase   + `_${p}`) : 0;
    const battRoi   = roiBattBase  ? this._s(roiBattBase    + `_${p}`) : 0;
    const peakShav  = roiPeakBase  ? this._s(roiPeakBase    + `_${p}`) : 0;
    const chargeCost= roiCostBase  ? this._s(roiCostBase    + `_${p}`) : 0;
    const autosuffKwh= roiAutoBase ? this._s(roiAutoBase    + `_${p}`) : 0;
    const autoR     = this._s('autosuff_ratio');
    const solTotalBleu   = this._s('roi_solar_total_bleu');
    const solTotalBlanc  = this._s('roi_solar_total_blanc');
    const solTotalRouge  = this._s('roi_solar_total_rouge');
    const battTotalBleu  = this._s('roi_battery_total_bleu');
    const battTotalBlanc = this._s('roi_battery_total_blanc');
    const battTotalRouge = this._s('roi_battery_total_rouge');
    const solTotal   = this._s('roi_solar_total');
    const battTotal  = this._s('roi_battery_total');
    const solarPurchasePrice   = parseFloat(this._config.solar_purchase_price)   || 0;
    const batteryPurchasePrice = parseFloat(this._config.battery_purchase_price) || 0;
    const installDateStr = this._config.installation_date || '';
    const solYearly  = this._s('roi_solar_yearly');
    const battYearly = this._s('roi_battery_yearly');
    let daysElapsed = 0;
    if (installDateStr) {
      const install = new Date(installDateStr);
      daysElapsed = Math.max(1, Math.floor((Date.now() - install.getTime()) / 86400000));
    }
    const isPreliminary  = daysElapsed > 0 && daysElapsed < 60;
    const solarDailyRate = daysElapsed > 0 ? solYearly  / daysElapsed : 0;
    const battDailyRate  = daysElapsed > 0 ? battYearly / daysElapsed : 0;
    const solarRemaining = solarDailyRate > 0 ? Math.max(solarPurchasePrice  - solTotal,  0) / solarDailyRate : null;
    const battRemaining  = battDailyRate  > 0 ? Math.max(batteryPurchasePrice - battTotal, 0) / battDailyRate  : null;
    const netSign = (solEco + battRoi) >= 0 ? '+' : '';

    body.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%;">
        <div class="roi-kpi" onclick="this.getRootNode().host._openMoreInfo('${roiSolarBase}_${p}',event)">
          <div class="rk-label">☀ Éco. Solaire</div>
          <div class="rk-val c-acc">+${solEco.toFixed(2)}<span style="font-size:15px">€</span></div>
        </div>
        <div class="roi-kpi" onclick="this.getRootNode().host._openMoreInfo('${roiBattBase}_${p}',event)">
          <div class="rk-label">🔋 ROI Batt.</div>
          <div class="rk-val" style="color:${battRoi>=0?'var(--acc)':'var(--red)'}">${battRoi>=0?'+':''}${battRoi.toFixed(2)}<span style="font-size:15px">€</span></div>
        </div>
        <div class="roi-kpi" onclick="this.getRootNode().host._openMoreInfo('${roiPeakBase}_${p}',event)">
          <div class="rk-label">⚡ Peak Shaving</div>
          <div class="rk-val c-blue">+${peakShav.toFixed(2)}<span style="font-size:15px">€</span></div>
        </div>
        <div class="roi-kpi" onclick="this.getRootNode().host._openMoreInfo('${roiCostBase}_${p}',event)">
          <div class="rk-label">💸 Coût Charge</div>
          <div class="rk-val c-red">−${chargeCost.toFixed(2)}<span style="font-size:15px">€</span></div>
        </div>
      </div>
      <div class="roi-bars">
        ${this._rbar('☀ Solaire', solTotal, solarPurchasePrice, solTotalBleu, solTotalBlanc, solTotalRouge, solarRemaining, isPreliminary)}
        <div style="height:1px;background:var(--dim);margin:2px 0"></div>
        ${this._rbar('🔋 Batterie', battTotal, batteryPurchasePrice, battTotalBleu, battTotalBlanc, battTotalRouge, battRemaining, isPreliminary)}
      </div>
      <div class="roi-footer">
        <span>Autosuff. <strong style="color:var(--acc)">${autoR.toFixed(0)}%</strong> · ${autosuffKwh.toFixed(1)} kWh</span>
        <span>Net total <strong style="color:var(--acc)">${netSign}${(solEco+battRoi).toFixed(2)}€</strong></span>
      </div>`;
  }

  _htmlHeader() {
    const couleur = this._str('tempo_color','unknown');
    const demain  = this._str('tempo_demain','unknown');
    const jR  = this._s('tempo_j_rouge',0);
    const jB  = this._s('tempo_j_blanc',0);
    const jBl = this._s('tempo_j_bleu',0);
    return `<div class="header">
      <div class="logo"><div class="logo-dot"></div><span class="logo-title">Solaire · ROI</span></div>
      ${this._config.show_tempo_jours !== false ? `<div class="tempo-chips">
        <div class="tempo-group"><span class="tempo-lbl">Aujourd'hui</span><span class="chip ${this._chipCls(couleur)}">${this._chipLbl(couleur)}</span></div>
        <div class="tempo-group"><span class="tempo-lbl">Demain</span><span class="chip ${this._chipCls(demain)}">${this._chipLbl(demain)}</span></div>
      </div>` : ''}
      ${this._config.show_tempo_jours !== false ? `<div class="jours">
        <div class="j-item"><div class="j-dot" style="background:#f43f5e"></div>${jR} j rouge</div>
        <div class="j-item"><div class="j-dot" style="background:#94a3b8"></div>${jB} j blanc</div>
        <div class="j-item"><div class="j-dot" style="background:#3b82f6"></div>${jBl} j bleu</div>
      </div>` : ''}
    </div>`;
  }

  _htmlSolcast() { return ''; }

  _htmlKpi() { return ''; }

  _htmlFlux() {
    const mc = this._moCount();
    const tc = this._titanCount();
    const tNames = [
      this._config.t1_name||'TITAN 1',
      this._config.t2_name||'TITAN 2',
      this._config.t3_name||'TITAN 3',
    ];
    const tColors = ['var(--acc)','#3b82f6','var(--cyan)'];
    const REF = 2000;

    const fxRow = ({name, panels, dch, dchPow, barW, barWSol, barWDch, color, val, total, chgD, dchD, daily, onclick, borderLeft, dim}) => {
      const oc = onclick ? `onclick="${onclick}"` : '';
      const hasSplit = barWSol !== undefined;
      const barHtml = hasSplit
        ? `<div class="fx-bsp"><div class="fx-bf" style="width:${barWSol}%;background:var(--amber)"></div><div class="fx-bf" style="width:${barWDch}%;background:var(--cyan)"></div></div>`
        : `<div class="fx-bw"><div class="fx-bf" style="width:${barW||0}%;background:${color}"></div></div>`;
      const valHtml = hasSplit
        ? `<div><div class="fx-v" style="color:var(--txt)">${total}</div><div class="fx-vs"><span style="color:var(--amber)">${val}</span><span style="color:rgba(255,255,255,0.2)">+</span><span style="color:var(--cyan)">${dch}</span></div></div>`
        : `<div class="fx-v" style="color:${color}">${val}</div>`;
      const style = [
        borderLeft ? `border-left:2px solid ${borderLeft}` : '',
        dim ? 'opacity:0.4' : '',
      ].filter(Boolean).join(';');
      return `<div class="fx" ${oc} ${style ? `style="${style}"` : ''}>
        <div>
          <div class="fx-name">${name}</div>
          ${panels?`<div class="fx-panels">${panels}</div>`:''}
          ${dch?`<div class="fx-dch">↓ décharge ${dch}</div>`:''}
          ${daily?`<div class="fx-daily">${daily}</div>`:''}
        </div>
        ${barHtml}
        ${valHtml}
      </div>`;
    };

    const titanPanels = (n) => {
      const vals = [1,2,3,4].map(i=>Math.round(this._s(`pv_t${n}_${i}`))).filter(v=>v>0);
      return vals.length ? vals.join(' · ')+' W' : '';
    };

    let prodPow = 0;
    let prodRows = '';

    for(let i=1;i<=mc;i++) {
      const moPow = this._s(`mo${i}_power`);
      prodPow += moPow;
      const pvs = [1,2,3,4].map(j=>Math.round(this._s(`pv_mo${i}_${j}`))).filter(v=>v>0);
      const panels = pvs.length ? pvs.join(' · ')+' W' : '';
      prodRows += fxRow({
        name: this._config[`mo${i}_name`]||`MO ${i}`,
        panels,
        barW: Math.min(moPow/REF*100,100).toFixed(0),
        color: 'var(--amber)',
        val: this._pw(moPow),
        onclick: `this.getRootNode().host._openMoreInfo('${this._id(`mo${i}_power`)}',event)`,
      });
    }

    for(let i=1;i<=tc;i++) {
      const st  = this._str(`t${i}_state`,'idle').toLowerCase().replace('static','idle');
      const isDch = st==='discharging';
      const dchPow = isDch ? this._s(`t${i}_disch_pow`) : 0;
      const panStr  = titanPanels(i);
      const pvVals  = [1,2,3,4].map(j=>Math.round(this._s(`pv_t${i}_${j}`))).filter(v=>v>0);
      const solPow  = pvVals.reduce((a,b)=>a+b,0);
      const hasSol  = solPow > 0;
      if(!hasSol && !isDch) continue;
      prodPow += solPow + dchPow;
      if(hasSol && isDch) {
        const maxW = Math.max(solPow+dchPow, 1);
        prodRows += fxRow({
          name: tNames[i-1], panels: panStr,
          barWSol: Math.min(solPow/maxW*100,100).toFixed(0),
          barWDch: Math.min(dchPow/maxW*100,100).toFixed(0),
          val: this._pw(solPow), dch: this._pw(dchPow),
          total: this._pw(solPow+dchPow),
          borderLeft: tColors[i-1],
          onclick: `this.getRootNode().host._openMoreInfo('${this._id(`t${i}_disch_pow`)}',event)`,
        });
      } else if(hasSol) {
        prodRows += fxRow({
          name: tNames[i-1], panels: panStr,
          barW: Math.min(solPow/REF*100,100).toFixed(0),
          color:'var(--amber)', val: this._pw(solPow),
          borderLeft: tColors[i-1],
        });
      } else {
        prodRows += fxRow({
          name: tNames[i-1], daily: 'décharge batterie',
          barW: Math.min(dchPow/REF*100,100).toFixed(0),
          color:'var(--cyan)', val: this._pw(dchPow),
          borderLeft: tColors[i-1],
          onclick: `this.getRootNode().host._openMoreInfo('${this._id(`t${i}_disch_pow`)}',event)`,
        });
      }
    }

    const conso     = this._s('conso');
    const consoD    = this._s('conso_daily');
    const autoR     = this._s('autosuff_ratio',0);
    const gridImp   = this._s('grid_import');
    const gridExp   = this._s('grid_export');
    const gridExpD  = this._s('grid_export_daily');
    const gridImpD  = this._s('grid_import_daily');
    const isExp     = gridExp > 10;

    let consoRows = fxRow({
      name:'Maison',
      daily:`${consoD.toFixed(1)} kWh · ${autoR.toFixed(0)}% auto`,
      barW: Math.min(conso/3000*100,100).toFixed(0),
      color:'rgba(220,240,255,0.25)', val:`<span style="color:rgba(220,240,255,0.8)">${this._pw(conso)}</span>`,
      onclick: `this.getRootNode().host._openMoreInfo('${this._id('conso')}',event)`,
    });

    for(let i=1;i<=tc;i++) {
      const chgPow = this._s(`t${i}_charge_pow`);
      const st = this._str(`t${i}_state`,'idle').toLowerCase().replace('static','idle');
      const isChg = st==='charging';
      const chgD = this._s(`t${i}_chg_daily`);
      const dchD = this._s(`t${i}_dch_daily`);
      consoRows += fxRow({
        name:`Charge ${tNames[i-1]}`,
        daily:`Chg ${chgD.toFixed(1)} · Dch ${dchD.toFixed(1)} kWh`,
        barW: isChg?Math.min(chgPow/REF*100,100).toFixed(0):0,
        color: tColors[i-1],
        val: isChg?this._pw(chgPow):`<span style="color:rgba(148,180,210,0.3)">0 W</span>`,
        borderLeft: tColors[i-1],
        dim: !isChg && chgPow < 10,
        onclick:`this.getRootNode().host._openMoreInfo('${this._id(`t${i}_charge_pow`)}',event)`,
      });
    }

    const resPow = isExp ? gridExp : gridImp;
    const resC   = isExp ? 'var(--blue)' : 'var(--red)';
    consoRows += fxRow({
      name: isExp ? '↑ Export Réseau' : '↓ Import Réseau',
      daily:`Exp ${gridExpD.toFixed(1)} · Imp ${gridImpD.toFixed(1)} kWh`,
      barW: Math.min(resPow/1000*100,100).toFixed(0),
      color: resC, val: this._pw(resPow),
      onclick:`this.getRootNode().host._openMoreInfo('${this._id(isExp?'grid_export':'grid_import')}',event)`,
    });

    const scToday    = this._s('solcast_today');
    const scTomorrow = this._s('solcast_tomorrow');
    const pvBase     = this._id('pv_prod_daily');
    const pvProdD    = pvBase ? this._s(pvBase+'_daily') : 0;
    const pvPct      = scToday>0 ? Math.min(pvProdD/scToday*100,100).toFixed(0) : 0;
    const scDiff     = scToday>0 ? ((scTomorrow-scToday)/scToday*100).toFixed(0) : 0;
    const diffC      = parseFloat(scDiff)>=0 ? 'var(--acc)' : 'var(--red)';
    const mT = this._s('meteo_temp',null), mC=this._s('meteo_cloud',null), mR=this._s('meteo_rain',null), mU=this._s('meteo_uv',null);
    const metHtml = (dim) => {
      const op = dim?'opacity:0.55;':'';
      return `<div class="fc-met" style="${op}">
        ${mT!==null?`<div class="fc-mi"><div>🌡</div><div class="fc-miv" style="color:${this._tempColor(mT)}">${mT}°</div><div class="fc-mil">Temp</div></div>`:''}
        ${mU!==null?`<div class="fc-mi"><div>☀️</div><div class="fc-miv" style="color:var(--amber)">UV ${mU}</div><div class="fc-mil">UV</div></div>`:''}
        ${mC!==null?`<div class="fc-mi"><div>☁️</div><div class="fc-miv" style="color:var(--mut)">${mC}%</div><div class="fc-mil">Nuages</div></div>`:''}
        ${mR!==null?`<div class="fc-mi"><div>🌧</div><div class="fc-miv" style="color:var(--blue)">${mR}%</div><div class="fc-mil">Pluie</div></div>`:''}
      </div>`;
    };

    return `<div class="fc-band">
      <div class="fc-cell" onclick="this.getRootNode().host._openMoreInfo('${this._id('solcast_today')}',event)" style="cursor:pointer">
        <div class="fc-lbl" style="color:var(--amber)">Solcast · Aujourd'hui</div>
        <div class="fc-num" style="color:var(--amber)">${scToday.toFixed(1)}<span class="fc-u"> kWh</span></div>
        <div class="fc-pr">${pvProdD.toFixed(1)} kWh produits sur ${scToday.toFixed(1)} kWh prévus — <strong style="color:var(--amber)">${pvPct}%</strong></div>
        <div class="fc-pb"><div class="fc-pf" style="width:${pvPct}%;background:var(--amber);box-shadow:0 0 5px rgba(245,158,11,0.4)"></div></div>
        ${metHtml(false)}
      </div>
      <div class="fc-cell" style="border-left:1px solid rgba(255,255,255,0.05);cursor:pointer;padding-left:28px" onclick="this.getRootNode().host._openMoreInfo('${this._id('solcast_tomorrow')}',event)">
        <div class="fc-lbl" style="color:rgba(245,158,11,0.55)">
          Solcast · Demain
          <span class="fc-diff" style="color:${diffC};margin-left:10px">${parseFloat(scDiff)>=0?'+':''}${scDiff}%</span>
        </div>
        <div class="fc-num" style="color:rgba(245,158,11,0.5)">${scTomorrow.toFixed(1)}<span class="fc-u"> kWh</span></div>
        <div class="fc-pr" style="color:rgba(226,232,240,0.25)">vs ${scToday.toFixed(1)} kWh aujourd'hui</div>
        <div class="fc-pb"><div class="fc-pf" style="width:${Math.min(scToday>0?scTomorrow/scToday*100:0,100).toFixed(0)}%;background:rgba(245,158,11,0.3)"></div></div>
        ${metHtml(true)}
      </div>
    </div>
    <div class="flux">
      <div class="flux-col">
        <div class="flux-col-head">
          <div class="flux-eyebrow"><div class="flux-dot" style="background:var(--amber);box-shadow:0 0 5px rgba(245,158,11,0.4)"></div>Production</div>
          <div class="flux-total" style="color:var(--amber)">${this._pw(prodPow)}</div>
        </div>
        <div class="flux-list">${prodRows}</div>
      </div>
      <div class="flux-col" style="border-left:1px solid rgba(255,255,255,0.05)">
        <div class="flux-col-head conso">
          <div class="flux-eyebrow"><div class="flux-dot" style="background:rgba(226,232,240,0.35)"></div>Consommation</div>
          <div class="flux-total" style="color:rgba(226,232,240,0.75)">${this._pw(conso)}</div>
        </div>
        <div class="flux-list">${consoRows}</div>
      </div>
    </div>`;
  }

  _htmlControls() {
    return this._clusterPanel(this._titanCount(), this._config.mode_pilotage || 'SmartIA');
  }

  _htmlTitans() {
    const tc = this._titanCount();
    const t1Name = this._config.t1_name || 'TITAN 1';
    const t2Name = this._config.t2_name || 'TITAN 2';
    const t3Name = this._config.t3_name || 'TITAN 3';
    const tc1 = this._titan(t1Name,'var(--acc)','t1_soc','t1_state','t1_charge_pow','t1_disch_pow','t1_temp','t1_chg_time','t1_dch_time','t1_alarm','t1_mode',this._config.titan1_links||[],'t1_dc_output','t1_led_switch','t1_led_state','t1_offgrid_switch','t1_offgrid_state',1,'t1_capacity','t1_eps','t1_rssi','t1_cycles','t1_mqtt_state','t1_wifi_ip','t1_wifi_ssid');
    const tc2 = tc>=2 ? this._titan(t2Name,'#3b82f6','t2_soc','t2_state','t2_charge_pow','t2_disch_pow','t2_temp','t2_chg_time','t2_dch_time','t2_alarm','t2_mode',this._config.titan2_links||[],'t2_dc_output','t2_led_switch','t2_led_state','t2_offgrid_switch','t2_offgrid_state',2,'t2_capacity','t2_eps','t2_rssi','t2_cycles','t2_mqtt_state','t2_wifi_ip','t2_wifi_ssid') : '';
    const tc3 = tc>=3 ? this._titan(t3Name,'var(--cyan)','t3_soc','t3_state','t3_charge_pow','t3_disch_pow','t3_temp','t3_chg_time','t3_dch_time','t3_alarm','t3_mode',this._config.titan3_links||[],'t3_dc_output','t3_led_switch','t3_led_state','t3_offgrid_switch','t3_offgrid_state',3,'t3_capacity','t3_eps','t3_rssi','t3_cycles','t3_mqtt_state','t3_wifi_ip','t3_wifi_ssid') : '';
    if (tc === 3) return `<div class="bottom-23t-titans bottom-3t-titans">${tc1}${tc2}${tc3}</div>`;
    if (tc === 2) return `<div class="bottom-23t-titans bottom-2t-titans">${tc1}${tc2}</div>`;
    return `<div>${tc1}</div>`;
  }

  _htmlRoi() {
    if (this._config.show_roi === false) return '';
    const p = this._period;
    const pLabels = {daily:'J',weekly:'S',monthly:'M',yearly:'A'};
    const roiSolarBase = this._id('roi_solar');
    const roiBattBase  = this._id('roi_battery');
    const solEco  = roiSolarBase ? this._s(roiSolarBase + `_${p}`) : 0;
    const battRoi = roiBattBase  ? this._s(roiBattBase  + `_${p}`) : 0;
    const netSign = (solEco + battRoi) >= 0 ? '+' : '';
    return `<div class="roi-btn" onclick="this.getRootNode().host._openRoiModal()">
      <div class="roi-btn-left">
        <div class="roi-btn-title">📊 ROI & Économies</div>
        <div class="roi-btn-sub">Période : ${pLabels[p]} · Cliquer pour détails</div>
      </div>
      <div class="roi-btn-vals">
        <span style="color:var(--acc)">☀ ${solEco>=0?'+':''}${solEco.toFixed(2)}€</span>
        <span style="color:${battRoi>=0?'var(--acc)':'var(--red)'}">🔋 ${battRoi>=0?'+':''}${battRoi.toFixed(2)}€</span>
        <span style="color:var(--acc)">Net ${netSign}${(solEco+battRoi).toFixed(2)}€</span>
      </div>
      <div class="roi-btn-open">Détails →</div>
    </div>`;
  }

  
  _rbar(label, total, purchasePrice, bleu, blanc, rouge, remainingDays, isPreliminary) {
    const pct = purchasePrice > 0 ? Math.min(total / purchasePrice * 100, 100) : 0;
    const isSolar = label.includes('Solaire');
    const fillColor = isSolar
      ? 'linear-gradient(90deg,var(--amber),#fbbf24)'
      : 'linear-gradient(90deg,var(--acc),var(--acc2))';
    const glowColor = isSolar ? 'rgba(245,158,11,0.4)' : 'rgba(16,185,129,0.4)';
    const sign = v => v >= 0 ? '+' : '';

    let roiTimeHtml = '';
    if(remainingDays !== null && remainingDays > 0 && purchasePrice > 0) {
      const years  = Math.floor(remainingDays / 365);
      const months = Math.floor((remainingDays % 365) / 30);
      const timeStr = years > 0 ? `${years} an${years>1?'s':''} ${months} mois` : `${months} mois`;
      roiTimeHtml = `<div style="display:flex;align-items:center;gap:6px;margin-top:4px">
        <span style="font-size:13px;color:var(--mut)">⏱ ROI dans</span>
        <span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:${isSolar?'var(--amber)':'var(--acc)'}">${timeStr}</span>
        ${isPreliminary ? `<span style="font-size:11px;color:var(--amber);background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:4px;padding:1px 6px;letter-spacing:0.5px">⚠ Estimation préliminaire (&lt; 60j)</span>` : ''}
      </div>`;
    } else if(purchasePrice > 0 && total >= purchasePrice) {
      roiTimeHtml = `<div style="margin-top:4px"><span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:var(--acc)">✓ ROI atteint</span></div>`;
    }

    return `<div style="display:flex;flex-direction:column;gap:7px">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:4px">
        <span style="font-size:13px;color:var(--mut);font-weight:600">${label} — ROI global</span>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          ${purchasePrice > 0 ? `<span style="font-size:11px;color:#334155;font-family:'Share Tech Mono',monospace;white-space:nowrap">Prix achat&nbsp;·&nbsp;${purchasePrice.toLocaleString('fr-FR')}&nbsp;€</span>` : ''}
          <span style="font-family:'Share Tech Mono',monospace;font-size:13px;color:var(--txt);white-space:nowrap">${sign(total)}${total.toFixed(2)}&nbsp;€</span>
          <span style="font-family:'Share Tech Mono',monospace;font-size:13px;color:var(--acc);white-space:nowrap">${pct.toFixed(1)}%</span>
        </div>
      </div>
      <div style="height:7px;background:var(--dim);border-radius:4px;overflow:hidden">
        <div style="height:100%;width:${pct.toFixed(1)}%;border-radius:4px;background:${fillColor};box-shadow:0 0 8px ${glowColor};transition:width 0.8s ease"></div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;padding-top:2px">
        <div style="display:flex;align-items:center;gap:5px">
          <div style="width:7px;height:7px;border-radius:50%;background:var(--red);flex-shrink:0"></div>
          <span style="font-size:11px;color:var(--mut);letter-spacing:0.5px;text-transform:uppercase">Rouge</span>
          <span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:var(--red)">${sign(rouge)}${rouge.toFixed(2)}€</span>
        </div>
        <div style="display:flex;align-items:center;gap:5px">
          <div style="width:7px;height:7px;border-radius:50%;background:#94a3b8;flex-shrink:0"></div>
          <span style="font-size:11px;color:var(--mut);letter-spacing:0.5px;text-transform:uppercase">Blanc</span>
          <span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:#94a3b8">${sign(blanc)}${blanc.toFixed(2)}€</span>
        </div>
        <div style="display:flex;align-items:center;gap:5px">
          <div style="width:7px;height:7px;border-radius:50%;background:#60a5fa;flex-shrink:0"></div>
          <span style="font-size:11px;color:var(--mut);letter-spacing:0.5px;text-transform:uppercase">Bleu</span>
          <span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:#60a5fa">${sign(bleu)}${bleu.toFixed(2)}€</span>
        </div>
      </div>
      ${roiTimeHtml}
    </div>`;
  }

  _openRoiModal()  { this.shadowRoot.getElementById('roi-overlay')?.classList.add('open'); }
  _closeRoiModal() { this.shadowRoot.getElementById('roi-overlay')?.classList.remove('open'); }

  _openWifiModal(label, rssi, mqttVal, ipVal, ssidVal, event) {
    if(event) { event.stopPropagation(); event.preventDefault(); }
    const overlay = this.shadowRoot.getElementById('wifi-modal-overlay');
    if(!overlay) return;
    const rssiC = rssi >= -50 ? 'var(--acc)' : rssi >= -65 ? 'var(--cyan)' : rssi >= -75 ? 'var(--amber)' : rssi >= -85 ? '#f97316' : 'var(--red)';
    const a1 = rssi >= -75 ? rssiC : '#1e2936';
    const a2 = rssi >= -65 ? rssiC : '#1e2936';
    const a3 = rssi >= -50 ? rssiC : '#1e2936';
    const mqttC = mqttVal.toLowerCase() === 'connected' ? 'var(--acc)' : 'var(--red)';
    const row = (icon, lbl, val, valColor) => `
      <div style="display:flex;align-items:center;gap:14px;padding:10px 0;border-bottom:1px solid var(--bord)">
        <span style="font-size:20px;width:28px;text-align:center;flex-shrink:0">${icon}</span>
        <span style="font-size:13px;color:var(--mut);flex:1;font-family:'Share Tech Mono',monospace;letter-spacing:0.5px">${lbl}</span>
        <span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:${valColor}">${val}</span>
      </div>`;
    const rssiRow = `
      <div style="display:flex;align-items:center;gap:14px;padding:10px 0;border-bottom:1px solid var(--bord)">
        <span style="width:28px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <svg width="22" height="18" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="12" r="1.5" fill="${rssiC}"/>
            <path d="M5.2 9.5 A4 4 0 0 1 10.8 9.5" stroke="${a1}" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M2.8 7 A7 7 0 0 1 13.2 7" stroke="${a2}" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <path d="M0.4 4.5 A10 10 0 0 1 15.6 4.5" stroke="${a3}" stroke-width="1.5" stroke-linecap="round" fill="none"/>
          </svg>
        </span>
        <span style="font-size:13px;color:var(--mut);flex:1;font-family:'Share Tech Mono',monospace;letter-spacing:0.5px">WiFi RSSI</span>
        <span style="font-family:'Share Tech Mono',monospace;font-size:13px;font-weight:700;color:${rssiC}">${rssi} dBm</span>
      </div>`;
    this.shadowRoot.getElementById('wifi-modal-title').textContent = `WiFi — ${label}`;
    this.shadowRoot.getElementById('wifi-modal-rows').innerHTML =
      row('📡', 'MQTT Server', mqttVal, mqttC) +
      row('🌐', 'WiFi IP', ipVal, 'var(--txt)') +
      rssiRow +
      row('📻', 'WiFi SSID', ssidVal, 'var(--txt)');
    overlay.classList.add('open');
  }
  _closeWifiModal() { this.shadowRoot.getElementById('wifi-modal-overlay')?.classList.remove('open'); }

}

customElements.define('solaire-dashboard-card', SolaireDashboardCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type:'solaire-dashboard-card',
  name:'Solaire Test',
  description:'Dark Pro · Production, Titans, Tempo, Solcast & ROI · v6',
  preview:false,
});