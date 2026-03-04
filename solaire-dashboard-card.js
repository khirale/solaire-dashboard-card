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

      <!-- MODES BUTTONS DYNAMIQUES -->
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

      <!-- LINK BATTERIES -->
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
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
  :host{display:block} *{box-sizing:border-box;margin:0;padding:0}
  :host {
    --bg:#080c10; --sur:#0d1117; --sur2:#131920; --dim:#1e2936;
    --bord:rgba(16,185,129,0.12);
    --acc:#10b981; --acc2:#34d399;
    --cyan:#06b6d4; --amber:#f59e0b; --red:#f43f5e; --blue:#3b82f6;
    --txt:#e2e8f0; --mut:#4b5563;
  }
  .card {
    background:var(--bg); color:var(--txt);
    font-family:'DM Sans',sans-serif; font-size:18px;
    padding:14px; display:flex; flex-direction:column; gap:10px;
    border-radius:18px; min-width:0;
    container-type: inline-size;
  }

  .header {
    display:flex; align-items:center; justify-content:space-between;
    padding:10px 14px; background:var(--sur);
    border:1px solid var(--bord); border-radius:12px;
  }
  .logo { display:flex; align-items:center; gap:10px; }
  .logo-dot { width:8px;height:8px;border-radius:50%;background:var(--acc);box-shadow:0 0 10px var(--acc);animation:breathe 2s ease-in-out infinite; }
  @keyframes breathe{0%,100%{box-shadow:0 0 8px var(--acc)}50%{box-shadow:0 0 20px var(--acc)}}
  @keyframes flowRight{from{background-position:0 0}to{background-position:20px 0}}
  @keyframes flowLeft{from{background-position:0 0}to{background-position:-20px 0}}
  .logo-title { font-family:'Space Mono',monospace;font-size:16px;font-weight:700;letter-spacing:2px;color:var(--acc);text-transform:uppercase; }
  .tempo-chips { display:flex;gap:8px;align-items:center; }
  .tempo-group { display:flex;flex-direction:column;align-items:center;gap:2px; }
  .tempo-lbl   { font-size:12px;color:var(--mut);letter-spacing:1px;text-transform:uppercase; }
  .chip { padding:3px 11px;border-radius:20px;font-size:14px;font-weight:700;font-family:'Space Mono',monospace;letter-spacing:1px;border:1px solid; }
  .chip-bleu   { background:rgba(59,130,246,0.1);color:#60a5fa;border-color:rgba(59,130,246,0.3); }
  .chip-blanc  { background:rgba(148,163,184,0.1);color:#94a3b8;border-color:rgba(148,163,184,0.3); }
  .chip-rouge  { background:rgba(244,63,94,0.1);color:#fb7185;border-color:rgba(244,63,94,0.3); }
  .chip-unknown{ background:rgba(80,80,80,0.1);color:var(--mut);border-color:#333; }
  .jours { display:flex;gap:12px;font-family:'Space Mono',monospace;font-size:14px;color:var(--mut); }
  .j-item { display:flex;align-items:center;gap:4px; }
  .j-dot  { width:6px;height:6px;border-radius:50%; }
  
  .solcast-row { display:grid;grid-template-columns:1fr 1fr;gap:8px; }
  .solcast-card {
    background:var(--sur);border:1px solid rgba(245,158,11,0.15);border-radius:12px;padding:11px 14px;
    display:flex;align-items:center;gap:12px;position:relative;overflow:hidden;cursor:pointer;
    transition:border-color 0.2s,transform 0.15s;
  }
  .solcast-card:hover { border-color:rgba(245,158,11,0.4);transform:translateY(-1px); }
  .solcast-card::before { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),transparent); }
  .sc-icon { font-size:24px;flex-shrink:0; }
  .sc-info { flex:1;min-width:0; }
  .sc-day  { font-size:12px;color:var(--mut);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px; }
  .sc-kwh  { font-family:'Space Mono',monospace;font-size:24px;font-weight:700;color:var(--amber);line-height:1; }
  .sc-unit { font-size:15px;color:var(--mut); }
  .sc-sub  { font-size:13px;margin-top:2px; }
  .sc-bar-wrap { width:72px;flex-shrink:0; }
  .sc-track { height:4px;background:var(--dim);border-radius:2px;overflow:hidden;margin-bottom:3px; }
  .sc-fill  { height:100%;border-radius:2px;background:linear-gradient(90deg,var(--amber),#fbbf24);transition:width 0.8s; }
  .sc-pct   { font-family:'Space Mono',monospace;font-size:13px;color:var(--mut);text-align:right; }
  
  .kpi-row   { display:grid;grid-template-columns:repeat(5,1fr);gap:8px; }
  .kpi-row-3 { display:grid;grid-template-columns:repeat(6,1fr);gap:8px; }
  .kpi {
    background:var(--sur);border:1px solid var(--bord);border-radius:12px;padding:12px 14px;
    position:relative;overflow:hidden;cursor:pointer;transition:border-color 0.2s,transform 0.15s;
  }
  .kpi:hover { border-color:rgba(16,185,129,0.4);transform:translateY(-2px); }
  .kpi-glow  { position:absolute;top:0;left:0;right:0;height:1px; }
  .kpi-label { font-size:13px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--mut);margin-bottom:7px;min-height:20px; }
  .kpi-val   { font-family:'Space Mono',monospace;font-size:28px;font-weight:700;line-height:1;color:var(--txt); }
  .kpi-unit     { font-size:16px;color:var(--mut);font-weight:400; }
  .kpi-state-lbl{ font-family:'Space Mono',monospace;font-size:17px; }
  .kpi-sub-val  { font-family:'Space Mono',monospace;font-size:15px; }
  .kpi-sub   { margin-top:5px;font-size:14px;color:var(--mut);display:flex;align-items:center;gap:4px; }
  .kpi-sdot  { width:4px;height:4px;border-radius:50%;flex-shrink:0; }
  .kpi-daily { position:absolute;top:12px;right:14px;font-family:'Space Mono',monospace;font-size:17px;color:var(--mut); }
  .c-acc{color:var(--acc)} .c-red{color:var(--red)} .c-blue{color:#60a5fa} .c-amb{color:var(--amber)} .c-txt{color:var(--txt)}
  
  .flux {
    background:var(--sur);border:1px solid var(--bord);border-radius:12px;padding:14px;
    display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start;
  }
  .flux-col { display:flex;flex-direction:column;gap:6px; }
  .flux-col-title { font-size:12px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:2px; }
  .flux-src {
    display:flex;align-items:center;justify-content:space-between;padding:7px 10px;border-radius:9px;
    background:var(--dim);border:1px solid transparent;cursor:pointer;transition:border-color 0.2s;
  }
  .flux-src:hover { border-color:var(--acc); }
  .flux-src-l { display:flex;align-items:center;gap:6px; }
  .flux-src-ic { font-size:18px; }
  .flux-src-n  { font-size:13px;color:var(--mut);font-weight:600;letter-spacing:0.5px; }
  .flux-src-v  { font-family:'Space Mono',monospace;font-size:16px;font-weight:700; }
  .flux-panels { flex:1;display:flex;gap:4px;justify-content:center;font-family:'Space Mono',monospace;font-size:15px;flex-wrap:wrap; }
  .flux-panel-sep { color:var(--dim); }
  .flux-badges { display:flex;gap:5px;flex-wrap:wrap; }
  .fbadge { padding:3px 9px;border-radius:20px;font-size:13px;font-family:'Space Mono',monospace;font-weight:700;border:1px solid; }
  .fb-imp { background:rgba(244,63,94,0.1);color:var(--red);border-color:rgba(244,63,94,0.3); }
  .fb-exp { background:rgba(16,185,129,0.1);color:var(--acc);border-color:rgba(16,185,129,0.3); }
  .fb-eq  { background:rgba(80,80,80,0.1);color:var(--mut);border-color:#333; }
  
  .bottom-1t { display:grid;grid-template-columns:1fr 240px 300px;gap:10px;align-items:start; }
  .bottom-23t-titans { display:grid;gap:10px; }
  .bottom-2t-titans  { grid-template-columns:1fr 1fr; }
  .bottom-3t-titans  { grid-template-columns:repeat(3,1fr); }
  
  .batt { background:var(--sur);border:1px solid var(--bord);border-radius:12px;padding:14px;position:relative;overflow:hidden; }
  .batt-top-bar { position:absolute;top:0;left:0;right:0;height:4px; }
  .batt-header  { display:flex;align-items:center;justify-content:space-between;margin-bottom:12px; }
  .batt-name-row{ display:flex;align-items:center;gap:7px; }
  .batt-led     { width:8px;height:8px;border-radius:50%;animation:breathe 2s infinite; }
  .batt-name    { font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--mut); }
  .batt-btns { display:flex;flex-direction:column;gap:4px;align-items:flex-end; }
  .batt-btn {
    padding:3px 9px;border-radius:6px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
    border:1px solid;cursor:pointer;font-family:'Space Mono',monospace;transition:all 0.15s;
  }
  .batt-btn-on  { background:rgba(16,185,129,0.15);color:var(--acc);border-color:rgba(16,185,129,0.4); }
  .batt-btn-off { background:rgba(80,80,80,0.1);color:var(--mut);border-color:#333; }
  .batt-btn:hover { filter:brightness(1.3); }
  .arc-wrap { display:flex;justify-content:center;margin:4px 0 10px; }
  .arc { position:relative;width:110px;height:58px;overflow:hidden; }
  .arc svg { position:absolute;inset:0; }
  .batt-state {
    display:flex;align-items:center;justify-content:space-between;padding:8px 11px;border-radius:9px;
    background:var(--dim);border-left:2px solid;margin-bottom:9px;
  }
  .bs-lbl  { font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase; }
  .bs-time { font-size:12px;color:var(--mut);margin-top:2px; }
  .bs-pow  { font-family:'Space Mono',monospace;font-size:17px;font-weight:700;cursor:pointer; }
  .bs-pow:hover { text-decoration:underline; }
  .batt-meta { display:grid;grid-template-columns:repeat(3,1fr);gap:6px; }
  .bm-item { padding:6px 7px;border-radius:8px;background:var(--dim);text-align:center;cursor:pointer;transition:background 0.2s; }
  .bm-item:hover { background:var(--sur2); }
  .bm-label { font-size:11px;color:var(--mut);letter-spacing:1px;text-transform:uppercase;margin-bottom:2px; }
  .bm-val   { font-family:'Space Mono',monospace;font-size:16px;font-weight:700; }
  .links-section { margin-top:10px;padding-top:9px;border-top:1px solid var(--dim); }
  .links-title   { font-size:11px;color:var(--mut);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px; }
  .link-row  { display:flex;align-items:center;gap:6px;margin-bottom:4px; }
  .link-n    { font-size:13px;color:var(--mut);width:40px;flex-shrink:0; }
  .link-trk  { flex:1;height:3px;background:var(--dim);border-radius:2px;overflow:hidden; }
  .link-fill { height:100%;border-radius:2px;transition:width 0.8s; }
  .link-pct  { font-family:'Space Mono',monospace;font-size:13px;color:var(--mut);width:26px;text-align:right; }
  .link-tmp  { font-size:13px;color:var(--mut);width:34px;text-align:right; }
  
  .cluster-panel {
    background:var(--sur);border:1px solid var(--bord);border-radius:12px;padding:14px;
    display:flex;flex-direction:column;gap:9px;
  }
  .cluster-panel-row {
    background:var(--sur);border:1px solid var(--bord);border-radius:12px;padding:12px 14px;
    display:grid;grid-template-columns:1.2fr 1fr 1fr auto;gap:12px;align-items:end;
  }
  .cluster-title { font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--mut);margin-bottom:2px; }
  .cluster-group { display:flex;flex-direction:column;gap:4px; }
  .cluster-label { font-size:11px;color:var(--mut);letter-spacing:1px;text-transform:uppercase; }
  .cluster-select {
    padding:7px 9px;border-radius:8px;background:var(--dim);border:1px solid var(--bord);
    font-family:'Space Mono',monospace;font-size:13px;color:var(--txt);width:100%;cursor:pointer;
  }
  .cluster-select:focus { outline:none;border-color:var(--acc); }
  .cluster-range { width:100%;accent-color:var(--acc);cursor:pointer; }
  .cluster-btn {
    padding:9px 10px;border-radius:9px;background:var(--dim);border:1px solid var(--bord);
    font-family:'Space Mono',monospace;font-size:12px;font-weight:700;letter-spacing:1px;
    text-transform:uppercase;color:var(--mut);text-align:center;cursor:pointer;transition:all 0.15s;
  }
  .cluster-btn:hover { border-color:var(--acc);color:var(--acc); }
  .cluster-btn-chg-active { background:rgba(16,185,129,0.1);color:var(--acc);border-color:rgba(16,185,129,0.3); }
  .cluster-btn-dch-active { background:rgba(6,182,212,0.1);color:var(--cyan);border-color:rgba(6,182,212,0.3); }
  
  .roi-btn {
    background:var(--sur);border:1px solid rgba(16,185,129,0.2);border-radius:12px;padding:12px 16px;
    display:flex;align-items:center;justify-content:space-between;gap:12px;
    cursor:pointer;transition:border-color 0.2s,transform 0.15s;
  }
  .roi-btn:hover { border-color:rgba(16,185,129,0.5);transform:translateY(-1px); }
  .roi-btn-left { display:flex;flex-direction:column;gap:3px; }
  .roi-btn-title { font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--acc); }
  .roi-btn-sub   { font-size:12px;color:var(--mut); }
  .roi-btn-vals  { display:flex;gap:14px;font-family:'Space Mono',monospace;font-size:15px;flex-wrap:wrap; }
  .roi-btn-open  {
    padding:6px 14px;border-radius:8px;background:rgba(16,185,129,0.1);color:var(--acc);
    border:1px solid rgba(16,185,129,0.3);font-size:12px;font-weight:700;letter-spacing:1px;
    font-family:'Space Mono',monospace;white-space:nowrap;flex-shrink:0;
  }
  
  .roi-overlay {
    position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(10px);z-index:9998;
    display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.2s;
  }
  .roi-overlay.open { opacity:1;pointer-events:all; }
  .roi-modal {
    background:var(--sur2);border:1px solid rgba(16,185,129,0.35);border-radius:18px;padding:16px;
    width:760px;max-width:96vw;box-shadow:0 24px 80px rgba(0,0,0,0.7);
    transform:translateY(16px);transition:transform 0.2s;display:flex;flex-direction:column;gap:12px;
  }
  .roi-overlay.open .roi-modal { transform:translateY(0); }
  .roi-modal-head { display:flex;align-items:center;justify-content:space-between; }
  .roi-modal-title { font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--acc); }
  .roi-modal-close {
    background:var(--dim);border:none;color:var(--mut);border-radius:8px;width:26px;height:26px;
    cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;
  }
  .roi-modal-close:hover { background:var(--sur);color:var(--txt); }
  .ptabs { display:flex;gap:4px; }
  .ptab {
    padding:3px 9px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
    border:1px solid rgba(255,255,255,0.08);background:transparent;color:var(--mut);cursor:pointer;
    font-family:'DM Sans',sans-serif;transition:all 0.15s;
  }
  .ptab:hover  { border-color:rgba(16,185,129,0.3);color:#888; }
  .ptab.active { background:var(--acc);border-color:var(--acc);color:#000;font-weight:800; }
  .roi-kpis { display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px; }
  .roi-kpi  { padding:9px 10px;border-radius:9px;background:var(--dim);cursor:pointer;border:1px solid transparent;transition:border-color 0.2s; }
  .roi-kpi:hover { border-color:var(--acc); }
  .rk-label { font-size:11px;color:var(--mut);letter-spacing:1px;text-transform:uppercase;margin-bottom:3px; }
  .rk-val   { font-family:'Space Mono',monospace;font-size:22px;font-weight:700;line-height:1; }
  .roi-bars { display:flex;flex-direction:column;gap:7px; }
  .rbar-row { display:flex;align-items:center;gap:7px; }
  .rbar-lbl { font-size:13px;color:var(--mut);width:76px;flex-shrink:0; }
  .rbar-trk { flex:1;height:5px;background:var(--dim);border-radius:3px;overflow:hidden;display:flex; }
  .rbar-seg { height:100%; }
  .rbar-val { font-family:'Space Mono',monospace;font-size:13px;color:var(--mut);width:54px;text-align:right; }
  .roi-footer { padding-top:9px;border-top:1px solid var(--dim);display:flex;justify-content:space-between;font-size:14px;color:var(--mut); }
  
  .modal-overlay {
    position:fixed;inset:0;background:rgba(0,0,0,0.75);backdrop-filter:blur(10px);z-index:9999;
    display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.2s;
  }
  .modal-overlay.open { opacity:1;pointer-events:all; }
  .modal {
    background:var(--sur2);border:1px solid rgba(16,185,129,0.35);border-radius:18px;padding:14px;
    width:700px;max-width:95vw;box-shadow:0 24px 80px rgba(0,0,0,0.7);
    transform:translateY(16px);transition:transform 0.2s;display:flex;flex-direction:column;gap:10px;
  }
  .modal-overlay.open .modal { transform:translateY(0); }
  .modal-head { display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:36px; }
  .modal-head-left { display:flex;align-items:baseline;gap:10px;flex:1;min-width:0;flex-wrap:wrap; }
  .modal-name  { font-size:16px;font-weight:600;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
  .modal-val   { font-family:'Space Mono',monospace;font-size:21px;font-weight:700;color:var(--acc); }
  .modal-unit  { font-size:14px;color:var(--mut); }
  .modal-close { background:var(--dim);border:none;color:var(--mut);border-radius:8px;width:26px;height:26px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
  .modal-close:hover { background:var(--sur);color:var(--txt); }
  .modal-chart { height:260px;background:var(--dim);border-radius:10px;overflow:hidden;position:relative; }
  .chart-area  { position:absolute;inset:0; }
  .chart-loading { display:flex;align-items:center;justify-content:center;height:100%;font-size:15px;color:var(--mut); }
  .chart-tooltip { position:absolute;background:var(--sur2);border:1px solid rgba(16,185,129,0.4);border-radius:8px;padding:5px 10px;font-family:'Space Mono',monospace;font-size:14px;color:var(--txt);pointer-events:none;opacity:0;transition:opacity 0.15s;white-space:nowrap;z-index:10; }
  .chart-tooltip.visible { opacity:1; }

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

    /* KPI inline overrides mobile */
    .kpi-state-lbl { font-size:13px; }
    .kpi-sub-val   { font-size:12px; }
  }
`;

class SolaireDashboardCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this._hass   = null;
    this._config = {};
    this._period = 'daily';
  }

  static getConfigElement() { return document.createElement('solaire-dashboard-card-editor'); }
  static getStubConfig()    { return {sensors:{}, titan_count:2, mo_count:1, show_roi:true, show_tempo_jours:true}; }
  setConfig(c) { this._config = c; }

  set hass(h) {
    this._hass = h;
    const modalOpen = this.shadowRoot.getElementById('modal-overlay')?.classList.contains('open');
    const roiOpen   = this.shadowRoot.getElementById('roi-overlay')?.classList.contains('open');
    const hasFocus  = !!(this.shadowRoot.activeElement &&
      (this.shadowRoot.activeElement.tagName === 'SELECT' ||
       this.shadowRoot.activeElement.tagName === 'INPUT'));
    if (!modalOpen && !roiOpen && !hasFocus) this._render();
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

  
  _openModal(entityId, name, unit, event) {
    if(event) { event.stopPropagation(); event.preventDefault(); }
    const overlay = this.shadowRoot.getElementById('modal-overlay');
    const st = this._hass?.states[entityId];
    const val = st?.state || '—';
    this.shadowRoot.getElementById('modal-name').textContent  = name;
    this.shadowRoot.getElementById('modal-val').textContent   = isNaN(parseFloat(val)) ? val : parseFloat(val).toLocaleString('fr-FR');
    this.shadowRoot.getElementById('modal-unit').textContent  = unit||st?.attributes?.unit_of_measurement||'';
    this.shadowRoot.getElementById('chart-area').innerHTML    = '<div class="chart-loading">Chargement…</div>';
    overlay.classList.add('open');
    this._loadHistory(entityId);
  }

  async _loadHistory(entityId) {
    try {
      const end   = new Date();
      const start = new Date(end.getTime() - 24*3600*1000);
      const data  = await this._hass.callApi('GET',
        `history/period/${start.toISOString()}?filter_entity_id=${entityId}&minimal_response=true&no_attributes=true`);
      const points = data?.[0] || [];
      const vals = points.map(p=>parseFloat(p.state)).filter(v=>!isNaN(v));
      if(vals.length < 2) {
        this.shadowRoot.getElementById('chart-area').innerHTML = '<div class="chart-loading">Pas assez de données</div>';
        return;
      }
      const min=Math.min(...vals), max=Math.max(...vals), avg=vals.reduce((a,b)=>a+b,0)/vals.length;
      const range=max-min||1;
      const W=680,H=260,padL=38,padR=8,padT=14,padB=20;
      const chartW=W-padL-padR, chartH=H-padT-padB;
      const toX=i=>padL+(i/(vals.length-1))*chartW;
      const toY=v=>padT+chartH-((v-min)/range)*chartH;
      const pts=vals.map((v,i)=>`${toX(i).toFixed(1)},${toY(v).toFixed(1)}`);
      const poly=`${padL},${H-padB} ${pts.join(' ')} ${W-padR},${H-padB}`;
      const maxIdx=vals.indexOf(max), minIdx=vals.indexOf(min);
      const maxX=toX(maxIdx),maxY=toY(max),minX=toX(minIdx),minY=toY(min),avgY=toY(avg);
      const timestamps=points.map(p=>p.last_changed||p.last_updated).filter(Boolean);
      const fmtTime=ts=>{const d=new Date(ts);return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;};
      const xS=timestamps.length>0?fmtTime(timestamps[0]):'';
      const xE=timestamps.length>0?fmtTime(timestamps[timestamps.length-1]):'';
      const fmt=v=>Math.abs(v)>=1000?(v/1000).toFixed(2)+'k':v%1===0?v:v.toFixed(1);
      this.shadowRoot.getElementById('chart-area').innerHTML=`
        <svg viewBox="0 0 ${W} ${H}" width="100%" height="100%" preserveAspectRatio="none">
          <defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </linearGradient></defs>
          <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${H-padB}" stroke="#1e2936" stroke-width="1"/>
          <line x1="${padL}" y1="${H-padB}" x2="${W-padR}" y2="${H-padB}" stroke="#1e2936" stroke-width="1"/>
          <line x1="${padL}" y1="${maxY.toFixed(1)}" x2="${W-padR}" y2="${maxY.toFixed(1)}" stroke="#1e2936" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${padL}" y1="${avgY.toFixed(1)}" x2="${W-padR}" y2="${avgY.toFixed(1)}" stroke="#1e2936" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${padL}" y1="${toY(min).toFixed(1)}" x2="${W-padR}" y2="${toY(min).toFixed(1)}" stroke="#1e2936" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="${padL-4}" y="${maxY.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#4b5563" font-size="9" font-family="Space Mono,monospace">${fmt(max)}</text>
          <text x="${padL-4}" y="${avgY.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#4b5563" font-size="9" font-family="Space Mono,monospace">${fmt(avg)}</text>
          <text x="${padL-4}" y="${toY(min).toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#4b5563" font-size="9" font-family="Space Mono,monospace">${fmt(min)}</text>
          <polygon points="${poly}" fill="url(#cg)"/>
          <polyline points="${pts.join(' ')}" fill="none" stroke="#10b981" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
          <circle cx="${maxX.toFixed(1)}" cy="${maxY.toFixed(1)}" r="5" fill="#10b981" stroke="#080c10" stroke-width="1" style="cursor:pointer"
            onclick="this.getRootNode().host._showChartTooltip('${fmt(max)}','${timestamps[maxIdx]?fmtTime(timestamps[maxIdx]):'?'}',${(maxX/W*100).toFixed(1)},${(maxY/H*100).toFixed(1)})"/>
          <circle cx="${minX.toFixed(1)}" cy="${minY.toFixed(1)}" r="5" fill="#f43f5e" stroke="#080c10" stroke-width="1" style="cursor:pointer"
            onclick="this.getRootNode().host._showChartTooltip('${fmt(min)}','${timestamps[minIdx]?fmtTime(timestamps[minIdx]):'?'}',${(minX/W*100).toFixed(1)},${(minY/H*100).toFixed(1)})"/>
          <text x="${padL}" y="${H-4}" text-anchor="start" fill="#4b5563" font-size="9" font-family="Space Mono,monospace">${xS}</text>
          <text x="${W-padR}" y="${H-4}" text-anchor="end" fill="#4b5563" font-size="9" font-family="Space Mono,monospace">${xE}</text>
        </svg>`;
    } catch(e) {
      this.shadowRoot.getElementById('chart-area').innerHTML = '<div class="chart-loading">Erreur chargement</div>';
    }
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

  
  _titan(label, accentColor, socKey, stateKey, chgKey, dchKey, tempKey, chgTimeKey, dchTimeKey, alarmKey, modeKey, links, dcOutKey, ledSwKey, ledStKey, offgridSwKey, offgridStKey, titanIndex, capacityKey, epsKey) {
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
    if(isChg&&chgTime>0&&chgTime<9999) stateInfo=`Full dans ${this._time(chgTime)}`;
    else if(isDch&&dchTime>0&&dchTime<9999&&soc>eps) stateInfo=`SOC min dans ${this._time(Math.round(dchTime*(soc-eps)/Math.max(soc,1)))}`;

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

    let barStyle;
    if(isChg) barStyle=`background-image:repeating-linear-gradient(90deg,transparent 0,transparent 6px,${accentColor} 6px,${accentColor} 14px);background-size:20px 100%;animation:flowRight .5s linear infinite;`;
    else if(isDch) barStyle=`background-image:repeating-linear-gradient(90deg,transparent 0,transparent 6px,${accentColor} 6px,${accentColor} 14px);background-size:20px 100%;animation:flowLeft .5s linear infinite;`;
    else barStyle=`background:${accentColor}22;`;

    return `<div class="batt">
      <div class="batt-top-bar" style="${barStyle}opacity:0.8"></div>
      <div class="batt-header">
        <div class="batt-name-row">
          <div class="batt-led" style="background:${accentColor};box-shadow:0 0 8px ${accentColor}"></div>
          <span class="batt-name">${label}</span>
          ${hasAlarm?`<span style="font-size:13px;color:var(--amber)">⚠ ${alarm}</span>`:''}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
          <span style="font-size:12px;color:var(--mut);font-family:'Space Mono',monospace;letter-spacing:0.5px;text-transform:capitalize">${mode}</span>
          <div class="batt-btns">
            <button class="batt-btn ${ledOn?'batt-btn-on':'batt-btn-off'}"
              onclick="this.getRootNode().host._hass.callService('switch','toggle',{entity_id:'${ledSwId}'})">LED</button>
            <button class="batt-btn ${offgridOn?'batt-btn-on':'batt-btn-off'}"
              onclick="this.getRootNode().host._hass.callService('switch','toggle',{entity_id:'${offgridSwId}'})">OFF-GRID</button>
          </div>
        </div>
      </div>
      <div class="arc-wrap" style="flex-direction:column;align-items:center;gap:4px">
        ${hasCapacity ? `
        <div style="display:flex;align-items:flex-end;justify-content:space-between;width:100%;gap:4px">
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:2px;flex:1">
            <span style="font-size:10px;color:var(--mut);letter-spacing:1px;text-transform:uppercase">Présent</span>
            <span style="font-family:'Space Mono',monospace;font-size:30px;font-weight:700;line-height:1;color:${socC}">${energyPresent.toFixed(1)}<span style="font-family:'Space Mono',monospace;font-size:17px;font-weight:700;color:${socC};opacity:0.7"> kWh</span></span>
          </div>
          <div class="arc" style="position:relative;flex-shrink:0">
            ${this._arcSvg(soc, socC)}
            <div style="position:absolute;bottom:2px;left:0;right:0;display:flex;align-items:baseline;justify-content:center;gap:1px;cursor:pointer"
              onclick="this.getRootNode().host._openModal('${socId}','SOC ${label}','%',event)">
              <span style="font-family:'Space Mono',monospace;font-size:30px;font-weight:700;line-height:1;color:${socC}">${soc}</span>
              <span style="font-family:'Space Mono',monospace;font-size:17px;font-weight:700;color:${socC};opacity:0.7">%</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:2px;flex:1">
            <span style="font-size:10px;color:var(--mut);letter-spacing:1px;text-transform:uppercase">Utile</span>
            <span style="font-family:'Space Mono',monospace;font-size:30px;font-weight:700;line-height:1;color:var(--amber)">${energyUsable.toFixed(1)}<span style="font-family:'Space Mono',monospace;font-size:17px;font-weight:700;color:var(--amber);opacity:0.7"> kWh</span></span>
          </div>
        </div>
        <div style="text-align:center;width:100%">
          <span style="font-size:10px;color:var(--mut);letter-spacing:1px;text-transform:uppercase">Capacité totale </span>
          <span style="font-family:'Space Mono',monospace;font-size:12px;color:var(--mut)">${capacityKwh.toFixed(1)} kWh</span>
        </div>
        ` : `
        <div class="arc" style="position:relative">
          ${this._arcSvg(soc, socC)}
          <div style="position:absolute;bottom:2px;left:0;right:0;display:flex;align-items:baseline;justify-content:center;gap:1px;cursor:pointer"
            onclick="this.getRootNode().host._openModal('${socId}','SOC ${label}','%',event)">
            <span style="font-family:'Space Mono',monospace;font-size:30px;font-weight:700;line-height:1;color:${socC}">${soc}</span>
            <span style="font-family:'Space Mono',monospace;font-size:17px;font-weight:700;color:${socC};opacity:0.7">%</span>
          </div>
        </div>
        `}
      </div>
      <div class="batt-state" style="border-left-color:${bsColor}">
        <div>
          <div class="bs-lbl" style="color:${bsColor}">${stateLabel}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px">
          <div class="bs-pow" style="color:${bsColor}"
            onclick="this.getRootNode().host._openModal('${this._id(isChg?chgKey:dchKey)}','Puissance ${label}','W',event)">
            ${power>0?this._pw(power):'—'}
          </div>
          ${stateInfo?`<div style="font-size:13px;color:${bsColor};opacity:0.8;font-family:'Space Mono',monospace">⏱ ${stateInfo}</div>`:''}
        </div>
      </div>
      <div class="batt-meta">
        <div class="bm-item" onclick="this.getRootNode().host._openModal('${tmpId}','Temp. ${label}','°C',event)">
          <div class="bm-label">Temp.</div>
          <div class="bm-val" style="color:${accentColor}">${temp>0?temp+'°C':'—'}</div>
        </div>
        <div class="bm-item">
          <div class="bm-label">État</div>
          <div class="bm-val" style="font-size:14px;color:${bsColor}">${isChg?'CHG':isDch?'DCH':'IDLE'}</div>
        </div>
        <div class="bm-item">
          <div class="bm-label">SOC</div>
          <div class="bm-val" style="color:${(soc-eps)>20?'var(--acc)':(soc-eps)>10?'var(--amber)':'var(--red)'}">${eps}%</div>
        </div>
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
      <!-- Mode + SOC Min -->
      <div class="cluster-group" style="min-width:0">
        <div class="cluster-label" style="font-size:12px;font-weight:700;letter-spacing:2px;color:var(--acc);margin-bottom:6px">⚙ CONTROLES</div>
        <div class="cluster-label">Working Mode <span style="color:var(--acc);font-family:'Space Mono',monospace">${modeVal!=='—'?'· '+modeVal:''}</span></div>
        <select class="cluster-select" id="cluster-mode-select">
          ${modeOptionsHtml}
        </select>
        <div class="cluster-label" style="margin-top:8px">SOC Min — <span id="cl-socmin-lbl">${socMinVal}%</span></div>
        <input type="range" class="cluster-range" min="5" max="100" step="5" value="${socMinVal}"
          oninput="this.getRootNode().host.shadowRoot.getElementById('cl-socmin-lbl').textContent=this.value+'%'"
          onchange="${cN(socMinId)}"/>
      </div>
      <!-- Charge / Décharge -->
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
      <!-- Charge / Décharge forcée -->
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
      <!-- Boutons -->
      <div class="cluster-group" style="display:flex;flex-direction:column;gap:8px;justify-content:flex-end;min-width:0">
        <button class="cluster-btn" onclick="${cSw(standbyId)}" style="background:rgba(245,158,11,0.1);color:var(--amber);border-color:rgba(245,158,11,0.3)">⏸ Standby</button>
        <button class="cluster-btn cluster-btn-chg-active" onclick="${cSw(forceChgId)}">⚡ Forcer Charge</button>
        <button class="cluster-btn cluster-btn-dch-active" onclick="${cSw(forceDchId)}">⟳ Forcer Décharge</button>
      </div>
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
        <span style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:${isSolar?'var(--amber)':'var(--acc)'}">${timeStr}</span>
        ${isPreliminary ? `<span style="font-size:11px;color:var(--amber);background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:4px;padding:1px 6px;letter-spacing:0.5px">⚠ Estimation préliminaire (&lt; 60j)</span>` : ''}
      </div>`;
    } else if(purchasePrice > 0 && total >= purchasePrice) {
      roiTimeHtml = `<div style="margin-top:4px"><span style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:var(--acc)">✓ ROI atteint</span></div>`;
    }

    return `<div style="display:flex;flex-direction:column;gap:7px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:13px;color:var(--mut);font-weight:600">${label} — ROI global</span>
        <div style="display:flex;align-items:center;gap:12px">
          ${purchasePrice > 0 ? `<span style="font-size:11px;color:#334155;font-family:'Space Mono',monospace">Prix achat · ${purchasePrice.toLocaleString('fr-FR')} €</span>` : ''}
          <span style="font-family:'Space Mono',monospace;font-size:13px;color:var(--txt)">${sign(total)}${total.toFixed(2)} €</span>
          <span style="font-family:'Space Mono',monospace;font-size:13px;color:var(--acc)">${pct.toFixed(1)}%</span>
        </div>
      </div>
      <div style="height:7px;background:var(--dim);border-radius:4px;overflow:hidden">
        <div style="height:100%;width:${pct.toFixed(1)}%;border-radius:4px;background:${fillColor};box-shadow:0 0 8px ${glowColor};transition:width 0.8s ease"></div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;padding-top:2px">
        <div style="display:flex;align-items:center;gap:5px">
          <div style="width:7px;height:7px;border-radius:50%;background:var(--red);flex-shrink:0"></div>
          <span style="font-size:11px;color:var(--mut);letter-spacing:0.5px;text-transform:uppercase">Rouge</span>
          <span style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:var(--red)">${sign(rouge)}${rouge.toFixed(2)}€</span>
        </div>
        <div style="display:flex;align-items:center;gap:5px">
          <div style="width:7px;height:7px;border-radius:50%;background:#94a3b8;flex-shrink:0"></div>
          <span style="font-size:11px;color:var(--mut);letter-spacing:0.5px;text-transform:uppercase">Blanc</span>
          <span style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:#94a3b8">${sign(blanc)}${blanc.toFixed(2)}€</span>
        </div>
        <div style="display:flex;align-items:center;gap:5px">
          <div style="width:7px;height:7px;border-radius:50%;background:#60a5fa;flex-shrink:0"></div>
          <span style="font-size:11px;color:var(--mut);letter-spacing:0.5px;text-transform:uppercase">Bleu</span>
          <span style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:#60a5fa">${sign(bleu)}${bleu.toFixed(2)}€</span>
        </div>
      </div>
      ${roiTimeHtml}
    </div>`;
  }

  
  _render() {
    if(!this._hass) return;
    const p  = this._period;
    const tc = this._titanCount();
    const mc = this._moCount();

    // Custom names
    const t1Name = this._config.t1_name || 'TITAN 1';
    const t2Name = this._config.t2_name || 'TITAN 2';
    const t3Name = this._config.t3_name || 'TITAN 3';

    const pvTotal= this._s('pv_total');
    const pvProdBase   = this._id('pv_prod_daily');
    const consoBase    = this._id('conso_daily');
    const pvProdDaily  = pvProdBase ? this._s(pvProdBase + '_daily') : 0;
    const consoDaily   = consoBase  ? this._s(consoBase  + '_daily') : 0;
    const gridExpDaily  = this._s('grid_export_daily');
    const gridImpDaily  = this._s('grid_import_daily');

    const roiSolarBase  = this._id('roi_solar');
    const roiBattBase   = this._id('roi_battery');
    const roiPeakBase   = this._id('roi_peak_shaving');
    const roiCostBase   = this._id('roi_charge_cost');
    const roiAutoBase   = this._id('roi_autosuff');
    const gridImp=this._s('grid_import');
    const gridExp=this._s('grid_export');
    const conso  =this._s('conso');
    const autoR  =this._s('autosuff_ratio');
    const t1Chg=this._s('t1_charge_pow'), t1Dch=this._s('t1_disch_pow');
    const t2Chg=this._s('t2_charge_pow'), t2Dch=this._s('t2_disch_pow');
    const t3Chg=this._s('t3_charge_pow'), t3Dch=this._s('t3_disch_pow');
    const t1St=this._str('t1_state','idle').toLowerCase().replace('static','idle');
    const t2St=this._str('t2_state','idle').toLowerCase().replace('static','idle');
    const t3St=this._str('t3_state','idle').toLowerCase().replace('static','idle');
    const t1Pow=t1St==='charging'?t1Chg:t1St==='discharging'?t1Dch:0;
    const t2Pow=t2St==='charging'?t2Chg:t2St==='discharging'?t2Dch:0;
    const t3Pow=t3St==='charging'?t3Chg:t3St==='discharging'?t3Dch:0;
    const couleur=this._str('tempo_color','unknown');
    const demain =this._str('tempo_demain','unknown');
    const jR=this._s('tempo_j_rouge',0), jB=this._s('tempo_j_blanc',0), jBl=this._s('tempo_j_bleu',0);
    const scToday=this._s('solcast_today'), scTomorrow=this._s('solcast_tomorrow');
    const scMax =Math.max(scToday,scTomorrow,0.1);
    const scDiff=scToday>0?((scTomorrow-scToday)/scToday*100).toFixed(0):0;
    const meteoTemp  = this._s('meteo_temp',null);
    const meteoCloud = this._s('meteo_cloud',null);
    const meteoRain  = this._s('meteo_rain',null);
    const meteoUv    = this._s('meteo_uv',null);
    const hasMeteo   = this._id('meteo_temp') || this._id('meteo_cloud') || this._id('meteo_rain') || this._id('meteo_uv');
    const solEco    = roiSolarBase  ? this._s(roiSolarBase   + `_${p}`) : 0;
    const solBleu   = roiSolarBase  ? this._s(roiSolarBase   + `_bleu_${p}`) : 0;
    const solBlanc  = roiSolarBase  ? this._s(roiSolarBase   + `_blanc_${p}`) : 0;
    const solRouge  = roiSolarBase  ? this._s(roiSolarBase   + `_rouge_${p}`) : 0;
    const battRoi       = roiBattBase   ? this._s(roiBattBase    + `_${p}`) : 0;
    const battRoiBleu   = roiBattBase   ? this._s(roiBattBase    + `_bleu_${p}`) : 0;
    const battRoiBlanc  = roiBattBase   ? this._s(roiBattBase    + `_blanc_${p}`) : 0;
    const battRoiRouge  = roiBattBase   ? this._s(roiBattBase    + `_rouge_${p}`) : 0;
    const solarPurchasePrice   = parseFloat(this._config.solar_purchase_price)   || 0;
    const batteryPurchasePrice = parseFloat(this._config.battery_purchase_price) || 0;
    const solTotal       = this._s('roi_solar_total');
    const solTotalBleu   = this._s('roi_solar_total_bleu');
    const solTotalBlanc  = this._s('roi_solar_total_blanc');
    const solTotalRouge  = this._s('roi_solar_total_rouge');
    const battTotal      = this._s('roi_battery_total');
    const battTotalBleu  = this._s('roi_battery_total_bleu');
    const battTotalBlanc = this._s('roi_battery_total_blanc');
    const battTotalRouge = this._s('roi_battery_total_rouge');
    const installDateStr   = this._config.installation_date || '';
    const solYearly        = this._s('roi_solar_yearly');
    const battYearly       = this._s('roi_battery_yearly');
    let daysElapsed = 0;
    if(installDateStr) {
      const install = new Date(installDateStr);
      daysElapsed = Math.max(1, Math.floor((Date.now() - install.getTime()) / 86400000));
    }
    const isPreliminary = daysElapsed > 0 && daysElapsed < 60;
    const solarDailyRate = daysElapsed > 0 ? solYearly / daysElapsed : 0;
    const battDailyRate  = daysElapsed > 0 ? battYearly / daysElapsed : 0;
    const solarRemaining = solarDailyRate > 0 ? Math.max(solarPurchasePrice - solTotal, 0) / solarDailyRate : null;
    const battRemaining  = battDailyRate  > 0 ? Math.max(batteryPurchasePrice - battTotal, 0) / battDailyRate  : null;
    const peakShav  = roiPeakBase   ? this._s(roiPeakBase    + `_${p}`) : 0;
    const chargeCost= roiCostBase   ? this._s(roiCostBase    + `_${p}`) : 0;
    const autosuffKwh = roiAutoBase ? this._s(roiAutoBase    + `_${p}`) : 0;
    const fluxDir=gridImp>10?'import':gridExp>10?'export':'eq';
    const pLabels={daily:'J',weekly:'S',monthly:'M',yearly:'A'};
    const netSign=(solEco+battRoi)>=0?'+':'';

    const t1ChgD = this._s('t1_chg_daily'), t1DchD = this._s('t1_dch_daily');
    const t2ChgD = this._s('t2_chg_daily'), t2DchD = this._s('t2_dch_daily');
    const t3ChgD = this._s('t3_chg_daily'), t3DchD = this._s('t3_dch_daily');

    // Dynamic MO sources HTML
    const moSourcesHtml = Array.from({length: mc}, (_, i) => {
      const n = i + 1;
      const moName = this._config[`mo${n}_name`] || `MO ${n}`;
      const moPow  = this._s(`mo${n}_power`);
      const pv1    = this._s(`pv_mo${n}_1`);
      const pv2    = this._s(`pv_mo${n}_2`);
      const pv3    = this._s(`pv_mo${n}_3`);
      const pv4    = this._s(`pv_mo${n}_4`);
      const moPowId = this._id(`mo${n}_power`);
      return `<div class="flux-src" style="${this._fop(moPow)}" onclick="this.getRootNode().host._openModal('${moPowId}','${moName} AC','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🟡</span><span class="flux-src-n">${moName}</span></div>
            <div class="flux-panels">
              <span style="color:${this._pvColor(pv1)}">${Math.round(pv1)}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(pv2)}">${Math.round(pv2)}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(pv3)}">${Math.round(pv3)}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(pv4)}">${Math.round(pv4)}W</span>
            </div>
            <span class="flux-src-v c-amb">${this._pw(moPow)}</span>
          </div>`;
    }).join('');

    const kpiT1 = `<div class="kpi" onclick="this.getRootNode().host._openModal('${this._id('t1_soc')}','SOC ${t1Name}','%',event)">
      <div class="kpi-glow" style="background:linear-gradient(90deg,var(--acc),transparent)"></div>
      <div class="kpi-label">🔋 ${t1Name}</div>
      <div style="display:flex;align-items:baseline;gap:8px">
        <div class="kpi-val" style="color:${this._socColor(this._s('t1_soc'))}">${this._s('t1_soc')}<span class="kpi-unit">%</span></div>
        <div class="kpi-state-lbl" style="flex:1;text-align:center;color:var(--acc)">${t1St==='charging'?`Charge ${this._pw(t1Pow)}`:t1St==='discharging'?`Décharge ${this._pw(t1Pow)}`:'Veille'}</div>
      </div>
      <div style="display:flex;justify-content:center;gap:12px;margin-top:5px">
        <span class="kpi-sub-val" style="color:var(--acc)">C: ${t1ChgD.toFixed(2)} kWh</span>
        <span class="kpi-sub-val" style="color:var(--cyan)">D: ${t1DchD.toFixed(2)} kWh</span>
      </div>
    </div>`;

    const kpiT2 = `<div class="kpi" onclick="this.getRootNode().host._openModal('${this._id('t2_soc')}','SOC ${t2Name}','%',event)">
      <div class="kpi-glow" style="background:linear-gradient(90deg,var(--blue),transparent)"></div>
      <div class="kpi-label">🔋 ${t2Name}</div>
      <div style="display:flex;align-items:baseline;gap:8px">
        <div class="kpi-val" style="color:${this._socColor(this._s('t2_soc'))}">${this._s('t2_soc')}<span class="kpi-unit">%</span></div>
        <div class="kpi-state-lbl" style="flex:1;text-align:center;color:var(--blue)">${t2St==='charging'?`Charge ${this._pw(t2Pow)}`:t2St==='discharging'?`Décharge ${this._pw(t2Pow)}`:'Veille'}</div>
      </div>
      <div style="display:flex;justify-content:center;gap:12px;margin-top:5px">
        <span class="kpi-sub-val" style="color:var(--acc)">C: ${t2ChgD.toFixed(2)} kWh</span>
        <span class="kpi-sub-val" style="color:var(--cyan)">D: ${t2DchD.toFixed(2)} kWh</span>
      </div>
    </div>`;

    const kpiT3 = tc>=3 ? `<div class="kpi" onclick="this.getRootNode().host._openModal('${this._id('t3_soc')}','SOC ${t3Name}','%',event)">
      <div class="kpi-glow" style="background:linear-gradient(90deg,var(--cyan),transparent)"></div>
      <div class="kpi-label">🔋 ${t3Name}</div>
      <div style="display:flex;align-items:baseline;gap:8px">
        <div class="kpi-val" style="color:${this._socColor(this._s('t3_soc'))}">${this._s('t3_soc')}<span class="kpi-unit">%</span></div>
        <div class="kpi-state-lbl" style="flex:1;text-align:center;color:var(--cyan)">${t3St==='charging'?`Charge ${this._pw(t3Pow)}`:t3St==='discharging'?`Décharge ${this._pw(t3Pow)}`:'Veille'}</div>
      </div>
      <div style="display:flex;justify-content:center;gap:12px;margin-top:5px">
        <span class="kpi-sub-val" style="color:var(--acc)">C: ${t3ChgD.toFixed(2)} kWh</span>
        <span class="kpi-sub-val" style="color:var(--cyan)">D: ${t3DchD.toFixed(2)} kWh</span>
      </div>
    </div>` : '';

    const fluxT3Src = tc>=3 ? `
          <div class="flux-src" onclick="this.getRootNode().host._openModal('${this._id('t3_disch_pow')}','${t3Name} Décharge','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🔋</span><span class="flux-src-n">${t3Name}</span></div>
            <div class="flux-panels">
              <span style="color:var(--mut)">DC:</span>
              <span style="color:${this._pvColor(this._s('pv_t3_1'))}">${Math.round(this._s('pv_t3_1'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t3_2'))}">${Math.round(this._s('pv_t3_2'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t3_3'))}">${Math.round(this._s('pv_t3_3'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t3_4'))}">${Math.round(this._s('pv_t3_4'))}W</span>
            </div>
            <span class="flux-src-v" style="color:var(--cyan)"><span style="font-size:14px;font-weight:400">AC </span>${this._pw(t3Dch)}</span>
          </div>` : '';

    const fluxT3Chg = tc>=3 ? `
          <div class="flux-src" onclick="this.getRootNode().host._openModal('${this._id('t3_charge_pow')}','Charge ${t3Name}','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">⚡</span><span class="flux-src-n">CHARGE ${t3Name}</span></div>
            <span class="flux-src-v" style="color:var(--cyan)">${this._pw(this._s('t3_charge_pow'))}</span>
          </div>` : '';

    const showRoi = this._config.show_roi !== false;
    const roiBtn = showRoi ? `<div class="roi-btn" onclick="this.getRootNode().host._openRoiModal()">
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
    </div>` : '';

    const tc1 = this._titan(t1Name,'var(--acc)','t1_soc','t1_state','t1_charge_pow','t1_disch_pow','t1_temp','t1_chg_time','t1_dch_time','t1_alarm','t1_mode',this._config.titan1_links||[],'t1_dc_output','t1_led_switch','t1_led_state','t1_offgrid_switch','t1_offgrid_state',1,'t1_capacity','t1_eps');
    const tc2 = this._titan(t2Name,'#3b82f6','t2_soc','t2_state','t2_charge_pow','t2_disch_pow','t2_temp','t2_chg_time','t2_dch_time','t2_alarm','t2_mode',this._config.titan2_links||[],'t2_dc_output','t2_led_switch','t2_led_state','t2_offgrid_switch','t2_offgrid_state',2,'t2_capacity','t2_eps');
    const tc3 = tc>=3 ? this._titan(t3Name,'var(--cyan)','t3_soc','t3_state','t3_charge_pow','t3_disch_pow','t3_temp','t3_chg_time','t3_dch_time','t3_alarm','t3_mode',this._config.titan3_links||[],'t3_dc_output','t3_led_switch','t3_led_state','t3_offgrid_switch','t3_offgrid_state',3,'t3_capacity','t3_eps') : '';

    const clusterPanel = this._clusterPanel(tc, this._config.mode_pilotage||'SmartIA');
    const titansGrid = tc===3
      ? `<div class="bottom-23t-titans bottom-3t-titans">${tc1}${tc2}${tc3}</div>`
      : tc===2
      ? `<div class="bottom-23t-titans bottom-2t-titans">${tc1}${tc2}</div>`
      : `<div>${tc1}</div>`;
    const bottomHtml = `
      ${clusterPanel}
      ${titansGrid}
      ${roiBtn}`;

    this.shadowRoot.innerHTML = `<style>${CSS}</style>
    <div class="card">

      <!-- HEADER -->
      <div class="header">
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
      </div>

      <!-- SOLCAST -->
      <div class="solcast-row">
        <div class="solcast-card" onclick="this.getRootNode().host._openModal('${this._id('solcast_today')}','Prévision PV Aujourd\'hui','kWh',event)">
          <span class="sc-icon">🌤</span>
          <div class="sc-info">
            <div class="sc-day">Prévision aujourd'hui</div>
            <div class="sc-kwh">${scToday.toFixed(1)}<span class="sc-unit"> kWh</span></div>
            <div class="sc-sub" style="color:var(--mut)">Estimé Solcast</div>
          </div>
          ${hasMeteo ? `<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px 10px;align-items:center;flex-shrink:0;min-width:90px">
            ${meteoTemp  !== null ? `<div style="text-align:center"><div style="font-size:19px;line-height:1">🌡</div><div style="font-family:'Space Mono',monospace;font-size:14px;font-weight:700;color:${this._tempColor(meteoTemp)}">${meteoTemp}°</div></div>` : '<div></div>'}
            ${meteoUv    !== null ? `<div style="text-align:center"><div style="font-size:19px;line-height:1;filter:sepia(1) saturate(3) hue-rotate(5deg)">☀️</div><div style="font-family:'Space Mono',monospace;font-size:14px;font-weight:700;color:${this._uvColor(meteoUv)}">UV ${meteoUv}</div></div>` : '<div></div>'}
            ${meteoCloud !== null ? `<div style="text-align:center"><div style="font-size:19px;line-height:1;filter:sepia(1) saturate(2) hue-rotate(180deg)">☁️</div><div style="font-family:'Space Mono',monospace;font-size:14px;font-weight:700;color:#93c5fd">${meteoCloud}%</div></div>` : '<div></div>'}
            ${meteoRain  !== null ? `<div style="text-align:center"><div style="font-size:19px;line-height:1">🌧</div><div style="font-family:'Space Mono',monospace;font-size:14px;font-weight:700;color:var(--cyan)">${meteoRain}%</div></div>` : '<div></div>'}
          </div>` : ''}
        </div>
        <div class="solcast-card" onclick="this.getRootNode().host._openModal('${this._id('solcast_tomorrow')}','Prévision PV Demain','kWh',event)">
          <span class="sc-icon">${scDiff>=0?'☀':'🌧'}</span>
          <div class="sc-info">
            <div class="sc-day">Prévision demain</div>
            <div class="sc-kwh">${scTomorrow.toFixed(1)}<span class="sc-unit"> kWh</span></div>
            <div class="sc-sub" style="color:${scDiff>=0?'var(--acc)':'var(--red)'}">${scDiff>=0?'+':''}${scDiff}% vs aujourd'hui</div>
          </div>
        </div>
      </div>

      <!-- KPI ROW -->
      <div class="kpi-row-dyn" style="display:grid;grid-template-columns:repeat(${3+tc},1fr);gap:8px;">
        <div class="kpi" onclick="this.getRootNode().host._openModal('${this._id('pv_total')}','Production PV Totale','W',event)">
          <div class="kpi-glow" style="background:linear-gradient(90deg,var(--amber),transparent)"></div>
          <div class="kpi-label">☀ Production</div>
          <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;flex-wrap:wrap">
            <div class="kpi-val c-amb">${this._pw(pvTotal)}</div>
            ${scToday>0 ? `<div class="kpi-sub-val" style="color:var(--mut);white-space:nowrap">${pvProdDaily.toFixed(1)} / ${scToday.toFixed(1)} kWh</div>` : `<div class="kpi-sub-val" style="color:var(--mut)">${pvProdDaily.toFixed(1)} kWh</div>`}
          </div>
          ${scToday>0 ? `
          <div style="display:flex;align-items:center;gap:6px;margin-top:6px">
            <div style="flex:1;height:4px;background:var(--dim);border-radius:2px;overflow:hidden">
              <div style="height:100%;border-radius:2px;width:${Math.min(scToday>0?pvProdDaily/scToday*100:0,100).toFixed(0)}%;background:${pvProdDaily/scToday>=0.8?'var(--acc)':pvProdDaily/scToday>=0.5?'var(--amber)':'var(--red)'};transition:width 0.8s"></div>
            </div>
            <span class="kpi-sub-val" style="color:var(--mut);white-space:nowrap">${(scToday>0?pvProdDaily/scToday*100:0).toFixed(0)}%</span>
          </div>` : ''}
        </div>
        <div class="kpi" onclick="this.getRootNode().host._openModal('${this._id('conso')}','Consommation Maison','W',event)">
          <div class="kpi-glow" style="background:linear-gradient(90deg,var(--cyan),transparent)"></div>
          <div style="position:absolute;top:50%;right:14px;transform:translateY(-50%);display:flex;flex-direction:column;align-items:flex-end;gap:1px">
            <span class="kpi-sub-val" style="color:var(--mut)">${consoDaily.toFixed(1)} kWh</span>
          </div>
          <div class="kpi-label">⚡ Consommation</div>
          <div class="kpi-val c-txt">${this._pw(conso)}</div>
          <div class="kpi-sub"><div class="kpi-sdot" style="background:var(--acc)"></div><span class="c-acc">${autoR.toFixed(0)}% autosuffisant</span></div>
        </div>
        <div class="kpi" onclick="this.getRootNode().host._openModal('${this._id(gridImp>10?'grid_import':'grid_export')}','Réseau EDF','W',event)">
          <div class="kpi-glow" style="background:linear-gradient(90deg,${fluxDir==='import'?'var(--red)':fluxDir==='export'?'var(--acc)':'var(--mut)'},transparent)"></div>
          <div class="kpi-label">${fluxDir==='import'?'🔴 Import EDF':fluxDir==='export'?'🟢 Export EDF':'⚪ Réseau'}</div>
          <div class="kpi-val" style="color:${fluxDir==='import'?'var(--red)':fluxDir==='export'?'var(--acc)':'var(--mut)'}">${fluxDir==='import'?this._pw(gridImp):fluxDir==='export'?this._pw(gridExp):'0 W'}</div>
          <div style="display:flex;justify-content:center;gap:14px;margin-top:5px">
            <span class="kpi-sub-val" style="color:var(--acc)">E: ${gridExpDaily.toFixed(2)} kWh</span>
            <span class="kpi-sub-val" style="color:var(--red)">I: ${gridImpDaily.toFixed(2)} kWh</span>
          </div>
        </div>
        ${kpiT1}${tc>=2?kpiT2:''}${kpiT3}
      </div>

      <!-- FLUX -->
      <div class="flux">
        <div class="flux-col">
          <div class="flux-col-title">Sources</div>
          ${moSourcesHtml}
          <div class="flux-src" style="${this._fop(t1Dch)}" onclick="this.getRootNode().host._openModal('${this._id('t1_disch_pow')}','${t1Name} Décharge','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🔋</span><span class="flux-src-n">${t1Name}</span></div>
            <div class="flux-panels">
              <span style="color:var(--mut)">DC:</span>
              <span style="color:${this._pvColor(this._s('pv_t1_1'))}">${Math.round(this._s('pv_t1_1'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t1_2'))}">${Math.round(this._s('pv_t1_2'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t1_3'))}">${Math.round(this._s('pv_t1_3'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t1_4'))}">${Math.round(this._s('pv_t1_4'))}W</span>
            </div>
            <span class="flux-src-v" style="color:var(--acc)"><span style="font-size:14px;font-weight:400">AC </span>${this._pw(t1Dch)}</span>
          </div>
          <div class="flux-src" style="${this._fop(t2Dch)}" onclick="this.getRootNode().host._openModal('${this._id('t2_disch_pow')}','${t2Name} Décharge','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🔋</span><span class="flux-src-n">${t2Name}</span></div>
            <div class="flux-panels">
              <span style="color:var(--mut)">DC:</span>
              <span style="color:${this._pvColor(this._s('pv_t2_1'))}">${Math.round(this._s('pv_t2_1'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t2_2'))}">${Math.round(this._s('pv_t2_2'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t2_3'))}">${Math.round(this._s('pv_t2_3'))}W</span><span class="flux-panel-sep">|</span>
              <span style="color:${this._pvColor(this._s('pv_t2_4'))}">${Math.round(this._s('pv_t2_4'))}W</span>
            </div>
            <span class="flux-src-v" style="color:#60a5fa"><span style="font-size:14px;font-weight:400">AC </span>${this._pw(t2Dch)}</span>
          </div>
          ${fluxT3Src}
          <div class="flux-src" style="${this._fop(gridImp)}" onclick="this.getRootNode().host._openModal('${this._id('grid_import')}','Import Réseau','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🔴</span><span class="flux-src-n">RÉSEAU</span></div>
            <span class="flux-src-v" style="color:${gridImp>10?'var(--red)':'var(--mut)'}">${this._pw(gridImp)}</span>
          </div>
        </div>
        <div class="flux-col">
          <div class="flux-col-title">Charges</div>
          <div class="flux-src" style="${this._fop(conso)}" onclick="this.getRootNode().host._openModal('${this._id('conso')}','Consommation Maison','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🏠</span><span class="flux-src-n">MAISON</span></div>
            <span class="flux-src-v c-txt">${this._pw(conso)}</span>
          </div>
          <div class="flux-src" style="${this._fop(this._s('t1_charge_pow'))}" onclick="this.getRootNode().host._openModal('${this._id('t1_charge_pow')}','Charge ${t1Name}','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">⚡</span><span class="flux-src-n">CHARGE ${t1Name}</span></div>
            <span class="flux-src-v" style="color:var(--acc)">${this._pw(this._s('t1_charge_pow'))}</span>
          </div>
          <div class="flux-src" style="${this._fop(this._s('t2_charge_pow'))}" onclick="this.getRootNode().host._openModal('${this._id('t2_charge_pow')}','Charge ${t2Name}','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">⚡</span><span class="flux-src-n">CHARGE ${t2Name}</span></div>
            <span class="flux-src-v" style="color:#60a5fa">${this._pw(this._s('t2_charge_pow'))}</span>
          </div>
          ${fluxT3Chg}
          <div class="flux-src" style="${this._fop(gridExp)}" onclick="this.getRootNode().host._openModal('${this._id('grid_export')}','Export Réseau','W',event)">
            <div class="flux-src-l"><span class="flux-src-ic">🟢</span><span class="flux-src-n">EXPORT</span></div>
            <span class="flux-src-v" style="color:${gridExp>10?'var(--acc)':'var(--mut)'}">${this._pw(gridExp)}</span>
          </div>
        </div>
      </div>

      <!-- BOTTOM -->
      ${bottomHtml}

    </div>

    <!-- ROI MODAL -->
    <div class="roi-overlay" id="roi-overlay">
      <div class="roi-modal">
        <div class="roi-modal-head">
          <div class="roi-modal-title">📊 ROI & Économies</div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="ptabs">
              ${['daily','weekly','monthly','yearly'].map(pp=>`
                <button class="ptab ${this._period===pp?'active':''}" data-p="${pp}">${pLabels[pp]}</button>
              `).join('')}
            </div>
            <button class="roi-modal-close" onclick="this.getRootNode().host._closeRoiModal()">✕</button>
          </div>
        </div>
        <div class="roi-kpis">
          <div class="roi-kpi" onclick="this.getRootNode().host._openModal('${roiSolarBase}_${p}','Éco. Solaire','€',event)">
            <div class="rk-label">☀ Éco. Solaire</div>
            <div class="rk-val c-acc">+${solEco.toFixed(2)}<span style="font-size:15px">€</span></div>
          </div>
          <div class="roi-kpi" onclick="this.getRootNode().host._openModal('${roiBattBase}_${p}','ROI Batterie','€',event)">
            <div class="rk-label">🔋 ROI Batt.</div>
            <div class="rk-val" style="color:${battRoi>=0?'var(--acc)':'var(--red)'}">${battRoi>=0?'+':''}${battRoi.toFixed(2)}<span style="font-size:15px">€</span></div>
          </div>
          <div class="roi-kpi" onclick="this.getRootNode().host._openModal('${roiPeakBase}_${p}','Peak Shaving','€',event)">
            <div class="rk-label">⚡ Peak Shaving</div>
            <div class="rk-val c-blue">+${peakShav.toFixed(2)}<span style="font-size:15px">€</span></div>
          </div>
          <div class="roi-kpi" onclick="this.getRootNode().host._openModal('${roiCostBase}_${p}','Coût Charge Réseau','€',event)">
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
        </div>
      </div>
    </div>

    <!-- SENSOR MODAL -->
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal">
        <div class="modal-head">
          <div class="modal-head-left">
            <span class="modal-name" id="modal-name"></span>
            <span class="modal-val"  id="modal-val"></span>
            <span class="modal-unit" id="modal-unit"></span>
          </div>
          <button class="modal-close" onclick="this.getRootNode().host._closeModal()">✕</button>
        </div>
        <div class="modal-chart">
          <div class="chart-area" id="chart-area"><div class="chart-loading">—</div></div>
          <div class="chart-tooltip" id="chart-tooltip"></div>
        </div>
      </div>
    </div>`;

    this.shadowRoot.querySelectorAll('.ptab').forEach(btn =>
      btn.addEventListener('click', e => {
        this._period = e.currentTarget.dataset.p;
        this._render();
        this.shadowRoot.getElementById('roi-overlay')?.classList.add('open');
      }));

    const modeSelect = this.shadowRoot.getElementById('cluster-mode-select');
    if(modeSelect) {
      modeSelect.addEventListener('change', e => {
        const entityId = e.target.value;
        if(entityId && entityId.startsWith('button.')) {
          this._hass.callService('button','press',{entity_id: entityId});
        }
      });
    }

    [1,2,3].forEach(i => {
      const arrow = this.shadowRoot.getElementById(`links-arrow-t${i}`);
      if(!arrow) return;
      arrow.addEventListener('click', () => {
        const body = this.shadowRoot.getElementById(`links-body-t${i}`);
        const icon = this.shadowRoot.getElementById(`links-arrow-icon-t${i}`);
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        icon.textContent   = isOpen ? '▶' : '▼';
        localStorage.setItem(`solaire-links-t${i}-open`, String(!isOpen));
      });
    });
  }

  _closeModal()    { this.shadowRoot.getElementById('modal-overlay')?.classList.remove('open'); }
  _openRoiModal()  { this.shadowRoot.getElementById('roi-overlay')?.classList.add('open'); }
  _closeRoiModal() { this.shadowRoot.getElementById('roi-overlay')?.classList.remove('open'); }

  _showChartTooltip(val, time, xPct, yPct) {
    const tt = this.shadowRoot.getElementById('chart-tooltip');
    if(!tt) return;
    tt.textContent = `${val} · ${time}`;
    tt.style.left  = `${Math.min(xPct, 75)}%`;
    tt.style.top   = `${Math.max(yPct - 10, 2)}%`;
    tt.classList.add('visible');
    setTimeout(()=>tt.classList.remove('visible'), 3000);
  }
}

customElements.define('solaire-dashboard-card', SolaireDashboardCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type:'solaire-dashboard-card',
  name:'Solaire Dashboard',
  description:'Dark Pro · Production, Titans, Tempo, Solcast & ROI · v6',
  preview:false,
});