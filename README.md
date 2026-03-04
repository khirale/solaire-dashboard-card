# Solaire Dashboard Card

Tableau de bord solaire pour Home Assistant — Dark Pro, responsive PC / tablette / mobile.

<p align="center">
  <img src="https://img.shields.io/badge/HACS-Custom-orange?style=for-the-badge" alt="HACS Custom">
  <img src="https://img.shields.io/badge/HA-2026.1+-blue?style=for-the-badge" alt="HA Version">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

<p align="center">
  <a href="https://buymeacoffee.com/khirale">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" height="45">
  </a>
</p>

---

## Ce que fait cette card

- **Production PV** en temps réel — onduleur + batteries Izypower Titan (1, 2 ou 3 unités)
- **Flux énergie** — sources et charges instantanées
- **Cluster Controls** — working mode, SOC min, puissance charge/décharge, forçage
- **Batteries Titan** — SOC, état, température, link batteries, boutons LED / Off-Grid
- **Solcast** — prévisions de production aujourd'hui et demain
- **Tempo EDF** — couleur du jour, couleur de demain, jours restants *(optionnel)*
- **ROI & Économies** — calcul par période Jour / Semaine / Mois / Année *(optionnel)*
- **Historique 24h** — graphique interactif sur clic de n'importe quelle valeur

---

## Matériel supporté

| Équipement | Intégration HA |
|---|---|
| Onduleur | Intégration de votre onduleur |
| Batteries **Izypower Titan** × 1, 2 ou 3 | izypower Local |
| Compteur réseau **Shelly ProEM-50** | Shelly |
| Tarification **Tempo EDF** *(optionnel)* | RTE |
| Prévisions **Solcast** *(optionnel)* | Solcast |

---

<img src="https://github.com/khirale/solaire-dashboard-card/blob/main/images/solaire-dashbaord-card-main.png" width=100%>
<p align="center">
<img src="https://github.com/khirale/solaire-dashboard-card/blob/main/images/solaire-dashboard-card-graph.png" width=48%>  <img src="https://github.com/khirale/solaire-dashboard-card/blob/main/images/solaire-dashbaord-card-roi.png" width=48%>
</p>

---

## Installation via HACS

1. HACS → **Dépôts personnalisés** → ajouter l'URL du repo → catégorie **Lovelace**
2. Installer **Solaire Dashboard Card**
3. Vider le cache du navigateur / app
4. Dans Lovelace → Ajouter une carte → rechercher **Solaire Dashboard**

---

## Premiers pas

La card s'utilise avec l'**éditeur visuel intégré**. Pas besoin de modifier le YAML à la main.

```yaml
type: custom:solaire-dashboard-card
titan_count: 2
```

Ouvrez ensuite l'éditeur visuel de la card pour renseigner vos sensors.

---

## Comment remplir l'éditeur visuel

L'éditeur est divisé en sections. Chaque champ attend le **nom complet d'un sensor** Home Assistant, par exemple `sensor.titan1_soc_safe`.

Un indicateur s'affiche à droite de chaque champ :
- <span style="color:green">✓</span> vert → le sensor existe dans votre HA
- <span style="color:red">✗</span> rouge → le sensor n'existe pas (vérifiez le nom dans Outils de développement → États)

> **Astuce** : commencez à taper dans un champ, l'autocomplétion propose les sensors de votre HA.

### Section Général

| Champ | Description |
|---|---|
| Nombre de Titans | 1, 2 ou 3 — adapte automatiquement la mise en page |
| Afficher ROI | Activé / Désactivé — masque toute la section ROI |
| Afficher jours Tempo | Activé / Désactivé — masque les chips Tempo et le compteur de jours |
| Mode pilotage | SmartIA ou MR1 — sélectionne le mode de pilotage du cluster |

### Section ☀ Production

Sensors de puissance instantanée en Watts.

- **Puissance totale PV** — sensor agrégeant toute la production solaire
- **Deye PV1 à PV4** — puissance de chaque string de l'onduleur
- **Onduleur AC** — puissance AC sortie onduleur
- **Titan 1/2/3 DC 1 à 4** — puissance DC entrée de chaque Titan

### Section 🔌 Réseau & Conso

- **Import / Export réseau (W)** — puissance instantanée
- **Puissance réseau brute** — valeur brute du compteur (positive = import, négative = export)
- **Export / Import réseau daily (kWh)** — énergie du jour (utility_meter)
- **Consommation maison (W)** — puissance instantanée consommée
- **Consommation daily** — voir [Sensors préfixés](#sensors-préfixés) ci-dessous
- **Autosuffisance (%)** — ratio couverture solaire / conso

### Section 📊 ROI & Économies

> Optionnel. Si vous ne souhaitez pas afficher le ROI, désactivez-le dans la section Général.

Voir [Sensors préfixés](#sensors-préfixés) pour comprendre comment remplir ces champs.

### Section 🔋 Titan 1 / 2 / 3

Pour chaque Titan :

| Champ | Type | Exemple |
|---|---|---|
| SOC (%) | sensor | `sensor.titan1_soc_safe` |
| État | sensor (charging/discharging/idle) | `sensor.titan1_battery_state_safe` |
| Puissance charge (W) | sensor | `sensor.titan1_ac_charging_power_safe` |
| Puissance décharge (W) | sensor | `sensor.titan1_ac_discharging_power_safe` |
| Charge daily (kWh) | sensor | `sensor.titan1_ac_charging_daily` |
| Décharge daily (kWh) | sensor | `sensor.titan1_ac_discharging_daily` |
| DC Output | sensor | `sensor.titan1_dc_output_safe` |
| Température (°C) | sensor | `sensor.izypower_titan_xxx_battery_temperature` |
| Temps charge restant (min) | sensor | `sensor.izypower_titan_xxx_remaining_charging_time` |
| Temps décharge restant (min) | sensor | `sensor.izypower_titan_xxx_residual_discharge_time` |
| Alarme | sensor | `sensor.izypower_titan_xxx_alarm` |
| Mode de fonctionnement | sensor | `sensor.izypower_titan_xxx_working_mode` |
| Switch LED | switch | `switch.izypower_titan_xxx_leds_control` |
| État LED | sensor | `sensor.izypower_titan_xxx_leds_state` |
| Switch Off-Grid | switch | `switch.izypower_titan_xxx_off_grid` |
| État Off-Grid | sensor | `sensor.izypower_titan_xxx_backup_state` |

### Section ⚙ Cluster Controls

Contrôles centralisés pour le Titan principal.

| Champ | Type | Description |
|---|---|---|
| Sensor mode actif | sensor | Affiche le mode en cours |
| SOC Min | number entity | Curseur SOC minimum |
| Puissance Charge | number entity | Curseur puissance de charge |
| Puissance Décharge | number entity | Curseur puissance de décharge |
| SOC cible forcé | number entity | SOC cible pour forçage |
| Puissance manuelle | number entity | Puissance lors du forçage |
| Bouton Forcer Charge | button entity | `button.izypower_titan_xxx_start_charge` |
| Bouton Forcer Décharge | button entity | `button.izypower_titan_xxx_start_discharge` |
| Bouton Standby | button entity | `button.izypower_titan_xxx_standby` |

> Les boutons de mode de fonctionnement (Self-Consumed, Intelligent, RealTime…) se configurent uniquement en YAML — voir [Configuration YAML complète](#configuration-yaml-complète).

### Section 🔗 Batteries Link

Pour les batteries link connectées à un Titan. Renseignez le sensor SOC et le sensor température de chaque module link.

Format des sensors : `sensor.izypower_titan_private_{HOST}_link_{SN}_link_batt_soc`

Pour trouver les noms : Outils de développement → États → rechercher `link_batt_soc`.

### Section ⚡ Tempo EDF

> Optionnel. Si vous n'avez pas Tempo, désactivez **Afficher jours Tempo** dans Général et laissez cette section vide.

- **Couleur actuelle / demain** — sensor RTE Tempo
- **Jours rouges / blancs / bleus restants** — compteurs RTE

### Section 🌤 Solcast & Météo

- **Prévision aujourd'hui / demain** — sensors Solcast en kWh
- **Température (°C)** — sensor météo local
- **Couverture nuageuse (%)** — sensor météo local
- **Chance de pluie (%)** — sensor météo local
- **Indice UV** — sensor météo local

---

## Sensors préfixés

Certains champs de l'éditeur sont marqués **(préfixe)**. Il s'agit de sensors qui existent en plusieurs variantes selon la période (daily, weekly, monthly, yearly). Au lieu de saisir 4 sensors séparément, vous entrez juste le **début du nom**, et la card construit automatiquement le nom complet selon la période affichée.

**Exemple concret :**

Vous avez dans HA ces utility_meters :
```
sensor.home_consumption_daily
sensor.home_consumption_weekly
sensor.home_consumption_monthly
sensor.home_consumption_yearly
```

Dans l'éditeur, entrez simplement : `sensor.home_consumption`

La card lira automatiquement `sensor.home_consumption_daily` quand la période "Jour" est sélectionnée, `sensor.home_consumption_weekly` pour "Semaine", etc.

> **Note** : les champs préfixés n'affichent pas d'indicateur <span style="color:green">✓</span>/<span style="color:red">✗</span> car le sensor exact (sans suffixe) n'existe pas dans HA — c'est tout à fait normal.

### Tableau des champs préfixés

| Champ éditeur | Vous entrez | La card lit |
|---|---|---|
| Production PV daily | `sensor.solar_pv_panel_production` | `..._daily` |
| Consommation daily | `sensor.home_consumption` | `..._daily` |
| Économies solaires | `sensor.solar_savings` | `..._daily/weekly/monthly/yearly` + `..._bleu/blanc/rouge_...` |
| ROI batterie | `sensor.battery_roi` | idem |
| Peak shaving | `sensor.peak_shaving_value` | `..._daily/weekly/monthly/yearly` |
| Coût charge réseau | `sensor.battery_grid_charge_cost` | idem |
| Autosuffisance énergie | `sensor.autosuffisance_energy` | idem |

---

## Templates YAML requis

La card **affiche** les données mais ne les calcule pas. Les sensors calculés (autosuffisance, ROI, économies…) doivent être créés dans votre HA sous forme de templates, intégrations et utility_meters, en fonction de vos intégrations et de votre matériel.

Les sensors nécessaires sont de trois types :

- **Templates** — puissances corrigées, états normalisés, calculs ROI instantanés
- **Intégrations** — conversion puissance (W) → énergie (kWh)
- **Utility_meters** — totaux par période daily / weekly / monthly / yearly

Adaptez ces sensors à vos propres entités avant de les renseigner dans l'éditeur.

---

## Configuration YAML complète

Si vous préférez configurer en YAML plutôt qu'avec l'éditeur visuel, voici un exemple complet avec 3 Titans. Supprimez les sections Titan 2 / Titan 3 et ajustez `titan_count` si vous en avez moins.

```yaml
type: custom:solaire-dashboard-card
titan_count: 3          # 1, 2 ou 3
show_roi: true          # true / false
show_tempo_jours: true  # true / false
mode_pilotage: SmartIA  # SmartIA ou MR1

sensors:

  # ── Production ─────────────────────────────────────────
  pv_total:         sensor.solar_pv_total_panel_power_safe
  pv_deye_1:        sensor.inverter_pv1_power_safe
  pv_deye_2:        sensor.inverter_pv2_power_safe
  pv_deye_3:        sensor.inverter_pv3_power_safe
  pv_deye_4:        sensor.inverter_pv4_power_safe
  inverter_power:   sensor.inverter_power_safe

  pv_t1_1:          sensor.titan1_dc_input_power_1_safe
  pv_t1_2:          sensor.titan1_dc_input_power_2_safe
  pv_t1_3:          sensor.titan1_dc_input_power_3_safe
  pv_t1_4:          sensor.titan1_dc_input_power_4_safe

  pv_t2_1:          sensor.titan2_dc_input_power_1_safe
  pv_t2_2:          sensor.titan2_dc_input_power_2_safe
  pv_t2_3:          sensor.titan2_dc_input_power_3_safe
  pv_t2_4:          sensor.titan2_dc_input_power_4_safe

  pv_t3_1:          sensor.titan3_dc_input_power_1_safe
  pv_t3_2:          sensor.titan3_dc_input_power_2_safe
  pv_t3_3:          sensor.titan3_dc_input_power_3_safe
  pv_t3_4:          sensor.titan3_dc_input_power_4_safe

  # ── Réseau & Conso ─────────────────────────────────────
  grid_import:       sensor.grid_import_w
  grid_export:       sensor.grid_export_w
  grid_power:        sensor.grid_power_safe
  grid_export_daily: sensor.grid_export_daily
  grid_import_daily: sensor.grid_import_daily
  conso:             sensor.consommation_maison_w
  conso_daily:       sensor.home_consumption      # préfixe — sans suffixe de période
  autosuff_ratio:    sensor.autosuffisance_ratio

  # ── ROI — préfixes (sans suffixe de période) ───────────
  pv_prod_daily:     sensor.solar_pv_panel_production
  roi_solar:         sensor.solar_savings
  roi_battery:       sensor.battery_roi
  roi_peak_shaving:  sensor.peak_shaving_value
  roi_charge_cost:   sensor.battery_grid_charge_cost
  roi_autosuff:      sensor.autosuffisance_energy

  # ── Titan 1 ────────────────────────────────────────────
  t1_soc:            sensor.titan1_soc_safe
  t1_state:          sensor.titan1_battery_state_safe
  t1_charge_pow:     sensor.titan1_ac_charging_power_safe
  t1_disch_pow:      sensor.titan1_ac_discharging_power_safe
  t1_chg_daily:      sensor.titan1_ac_charging_daily
  t1_dch_daily:      sensor.titan1_ac_discharging_daily
  t1_dc_output:      sensor.titan1_dc_output_safe
  t1_temp:           sensor.izypower_titan_xxx_titan_battery_temperature
  t1_chg_time:       sensor.izypower_titan_xxx_titan_remaining_charging_time
  t1_dch_time:       sensor.izypower_titan_xxx_titan_residual_discharge_time
  t1_alarm:          sensor.izypower_titan_xxx_titan_alarm
  t1_mode:           sensor.izypower_titan_xxx_titan_working_mode
  t1_led_switch:     switch.izypower_titan_xxx_leds_control
  t1_led_state:      sensor.izypower_titan_xxx_titan_leds_state
  t1_offgrid_switch: switch.izypower_titan_xxx_off_grid
  t1_offgrid_state:  sensor.izypower_titan_xxx_titan_backup_state

  # ── Titan 2 ────────────────────────────────────────────
  t2_soc:            sensor.titan2_soc_safe
  t2_state:          sensor.titan2_battery_state_safe
  t2_charge_pow:     sensor.titan2_ac_charging_power_safe
  t2_disch_pow:      sensor.titan2_ac_discharging_power_safe
  t2_chg_daily:      sensor.titan2_ac_charging_daily
  t2_dch_daily:      sensor.titan2_ac_discharging_daily
  t2_dc_output:      sensor.titan2_dc_output_safe
  t2_temp:           sensor.izypower_titan_yyy_titan_battery_temperature
  t2_chg_time:       sensor.izypower_titan_yyy_titan_remaining_charging_time
  t2_dch_time:       sensor.izypower_titan_yyy_titan_residual_discharge_time
  t2_alarm:          sensor.izypower_titan_yyy_titan_alarm
  t2_mode:           sensor.izypower_titan_yyy_titan_working_mode
  t2_led_switch:     switch.izypower_titan_yyy_leds_control
  t2_led_state:      sensor.izypower_titan_yyy_titan_leds_state
  t2_offgrid_switch: switch.izypower_titan_yyy_off_grid
  t2_offgrid_state:  sensor.izypower_titan_yyy_titan_backup_state

  # ── Titan 3 ────────────────────────────────────────────
  t3_soc:            sensor.titan3_soc_safe
  t3_state:          sensor.titan3_battery_state_safe
  t3_charge_pow:     sensor.titan3_ac_charging_power_safe
  t3_disch_pow:      sensor.titan3_ac_discharging_power_safe
  t3_chg_daily:      sensor.titan3_ac_charging_daily
  t3_dch_daily:      sensor.titan3_ac_discharging_daily
  t3_dc_output:      sensor.titan3_dc_output_safe
  t3_temp:           sensor.izypower_titan_zzz_titan_battery_temperature
  t3_chg_time:       sensor.izypower_titan_zzz_titan_remaining_charging_time
  t3_dch_time:       sensor.izypower_titan_zzz_titan_residual_discharge_time
  t3_alarm:          sensor.izypower_titan_zzz_titan_alarm
  t3_mode:           sensor.izypower_titan_zzz_titan_working_mode
  t3_led_switch:     switch.izypower_titan_zzz_leds_control
  t3_led_state:      sensor.izypower_titan_zzz_titan_leds_state
  t3_offgrid_switch: switch.izypower_titan_zzz_off_grid
  t3_offgrid_state:  sensor.izypower_titan_zzz_titan_backup_state

  # ── Tempo EDF (optionnel) ──────────────────────────────
  tempo_color:       sensor.rte_tempo_couleur_actuelle
  tempo_demain:      sensor.rte_tempo_prochaine_couleur
  tempo_j_rouge:     sensor.rte_tempo_cycle_jours_restants_rouge
  tempo_j_blanc:     sensor.rte_tempo_cycle_jours_restants_blanc
  tempo_j_bleu:      sensor.rte_tempo_cycle_jours_restants_bleu

  # ── Solcast (optionnel) ────────────────────────────────
  solcast_today:     sensor.solcast_pv_forecast_previsions_pour_aujourd_hui
  solcast_tomorrow:  sensor.solcast_pv_forecast_previsions_pour_demain

  # ── Météo (optionnel) ──────────────────────────────────
  meteo_temp:        sensor.openweathermap_temperature
  meteo_cloud:       sensor.openweathermap_cloud_coverage
  meteo_rain:        sensor.openweathermap_forecast_precipitation_probability
  meteo_uv:          sensor.openweathermap_uv_index

  # ── Cluster Controls ───────────────────────────────────
  cluster_mode_sensor: sensor.izypower_titan_xxx_titan_working_mode
  cluster_soc_min:     number.izypower_titan_xxx_soc_security_esp
  cluster_chg_pow:     number.izypower_titan_xxx_max_charge_power
  cluster_dch_pow:     number.izypower_titan_xxx_max_discharge_power
  cluster_forced_soc:  number.izypower_titan_xxx_charge_soc_max
  cluster_forced_pow:  number.izypower_titan_xxx_charge_discharge_power
  cluster_force_chg:   button.izypower_titan_xxx_start_charge
  cluster_force_dch:   button.izypower_titan_xxx_start_discharge
  cluster_standby:     button.izypower_titan_xxx_standby

# ── Boutons de mode (autant que nécessaire) ──────────────
cluster_mode_buttons:
  - label: Self-Consumed
    entity: button.izypower_titan_xxx_self_consumed_mode
  - label: Intelligent
    entity: button.izypower_titan_xxx_intelligent_mode
  - label: RealTime
    entity: button.izypower_titan_xxx_realtime_mode

# ── Link batteries Titan 1 (optionnel, jusqu'à 5) ────────
titan1_links:
  - soc:  sensor.izypower_titan_private_xxx_link_aaa_link_batt_soc
    temp: sensor.izypower_titan_private_xxx_link_aaa_link_batt_temp
  - soc:  sensor.izypower_titan_private_xxx_link_bbb_link_batt_soc
    temp: sensor.izypower_titan_private_xxx_link_bbb_link_batt_temp

# ── Link batteries Titan 2 (optionnel, jusqu'à 5) ────────
titan2_links:
  - soc:  sensor.izypower_titan_private_yyy_link_ccc_link_batt_soc
    temp: sensor.izypower_titan_private_yyy_link_ccc_link_batt_temp

# ── Link batteries Titan 3 (optionnel, jusqu'à 5) ────────
titan3_links:
  - soc:  sensor.izypower_titan_private_zzz_link_ddd_link_batt_soc
    temp: sensor.izypower_titan_private_zzz_link_ddd_link_batt_temp
```
---
> Remplacez `xxx`, `yyy`, `zzz` par les identifiants réels de vos Titans (adresse IP ou numéro de série selon votre intégration). Retrouvez les noms exacts dans **Outils de développement → États**.
