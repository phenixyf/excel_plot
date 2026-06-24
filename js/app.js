(() => {
  const colors = [
    "#246bfe", "#e11d48", "#15803d", "#b45309", "#7c3aed", "#0891b2",
    "#be123c", "#4d7c0f", "#c026d3", "#0f766e", "#ca8a04", "#475569"
  ];

  const I18N = {
    zh: {
      resizePanels: "调整数据区和绘图区宽度",
      appTitle: "Excel 数据曲线图",
      inputAria: "数据输入",
      plotAria: "曲线图",
      language: "语言",
      yCurveCount: "Y 曲线数",
      metaInfo: "作者：一非，开发者：AI",
      pasteMode: "粘贴输入",
      fileMode: "文件导入",
      fileInput: "上传 Excel 或 CSV 文件",
      chooseFile: "选择文件",
      noFileChosen: "未选择文件",
      sheet: "工作表",
      orientation: "数据方向",
      byColumn: "按列",
      byRow: "按行",
      header: "首行/首列为名称",
      applyFile: "应用到输入区",
      fileEmpty: "未选择文件",
      fileReading: "正在读取文件...",
      fileLoaded: "已读取 {name}，共 {count} 个工作表",
      fileApplied: "已应用文件数据到输入区",
      fileNeed: "请先选择文件",
      fileUnsupported: "仅支持 CSV、TXT、XLSX 文件",
      fileParseFail: "文件解析失败：{error}",
      xData: "X 数据",
      yData: "Y{n} 数据",
      xSource: "X 来源",
      ySource: "Y 来源",
      source: "来源",
      curveName: "曲线名称 {n}",
      clearYTitle: "清除此 Y 数据",
      plot: "绘图",
      sample: "示例",
      clear: "清空",
      pan: "平移",
      box: "框选",
      reset: "还原",
      waitData: "等待数据",
      emptyXHint: "X 为空时使用数据序号",
      plotted: "已绘制 {count} 条曲线",
      noData: "至少需要一组包含两个以上数值的 Y 数据",
      xRange: "X {xmin} 到 {xmax}，Y {ymin} 到 {ymax}",
      editColor: "正在修改 {name} 的颜色",
      colorChanged: "已修改 {name} 的颜色",
      metricComputed: "已计算 {name} 的 {metric}",
      metricOptions: "统计选项",
      metricClear: "清除此统计",
      maxMenu: "最大值 (MAX)",
      minMenu: "最小值 (MIN)",
      rmsMenu: "有效值 (RMS)",
      gainOffsetMenu: "增益和截距 (Gain / Offset)",
      gainOffset: "增益和截距",
      selectFirstPoint: "请在曲线 {name} 上点击选择第一点",
      selectSecondPoint: "已选择第一点，请点击选择第二点",
      pointSelectionMiss: "请点击选中曲线附近",
      sameXError: "两点的 X 坐标不能相同，请重新选择第二点",
      gainOffsetComputed: "已计算 {name} 的 Gain 和 Offset",
      gainValue: "Gain = {value}",
      offsetValue: "Offset = {value}",
      pointValue: "{point}：X = {x}，Y = {y}",
      cancelSelection: "取消选择",
      max: "MAX",
      min: "MIN",
      rms: "RMS",
      row: "行 {n}",
      column: "列 {name}",
      sheetDefault: "工作表 {n}",
      xMetric: "X = {x}",
      unsupportedXlsx: "当前浏览器不支持本地解压 XLSX，请改用 CSV 或新版 Chrome/Edge"
    },
    en: {
      resizePanels: "Resize data and plot panels",
      appTitle: "Excel Data Plot",
      inputAria: "Data input",
      plotAria: "Plot",
      language: "Language",
      yCurveCount: "Y curves",
      metaInfo: "Author: Yifei, Developer: AI",
      pasteMode: "Paste",
      fileMode: "File import",
      fileInput: "Upload Excel or CSV file",
      chooseFile: "Choose file",
      noFileChosen: "No file chosen",
      sheet: "Sheet",
      orientation: "Data direction",
      byColumn: "Columns",
      byRow: "Rows",
      header: "First row/column has names",
      applyFile: "Apply to inputs",
      fileEmpty: "No file selected",
      fileReading: "Reading file...",
      fileLoaded: "Loaded {name}, {count} sheet(s)",
      fileApplied: "File data applied to input areas",
      fileNeed: "Please select a file first",
      fileUnsupported: "Only CSV, TXT, and XLSX files are supported",
      fileParseFail: "File parse failed: {error}",
      xData: "X data",
      yData: "Y{n} data",
      xSource: "X source",
      ySource: "Y source",
      source: "Source",
      curveName: "Curve name {n}",
      clearYTitle: "Clear this Y data",
      plot: "Plot",
      sample: "Sample",
      clear: "Clear",
      pan: "Pan",
      box: "Box zoom",
      reset: "Reset",
      waitData: "Waiting for data",
      emptyXHint: "Use data index when X is empty",
      plotted: "Plotted {count} curve(s)",
      noData: "At least one Y series needs two or more numeric values",
      xRange: "X {xmin} to {xmax}, Y {ymin} to {ymax}",
      editColor: "Editing color for {name}",
      colorChanged: "Changed color for {name}",
      metricComputed: "Calculated {metric} for {name}",
      metricOptions: "Metric options",
      metricClear: "Clear this metric",
      maxMenu: "Maximum (MAX)",
      minMenu: "Minimum (MIN)",
      rmsMenu: "RMS",
      gainOffsetMenu: "Gain and Offset",
      gainOffset: "Gain and Offset",
      selectFirstPoint: "Click the first point on {name}",
      selectSecondPoint: "First point selected. Click the second point",
      pointSelectionMiss: "Click near the selected curve",
      sameXError: "The two X coordinates must differ. Select the second point again",
      gainOffsetComputed: "Calculated Gain and Offset for {name}",
      gainValue: "Gain = {value}",
      offsetValue: "Offset = {value}",
      pointValue: "{point}: X = {x}, Y = {y}",
      cancelSelection: "Cancel selection",
      max: "MAX",
      min: "MIN",
      rms: "RMS",
      row: "Row {n}",
      column: "Column {name}",
      sheetDefault: "Sheet {n}",
      xMetric: "X = {x}",
      unsupportedXlsx: "This browser cannot unzip XLSX locally. Please use CSV or a newer Chrome/Edge."
    }
  };

  const els = {
    appShell: document.getElementById("appShell"),
    layoutSplitter: document.getElementById("layoutSplitter"),
    inputPanel: document.getElementById("inputPanel"),
    plotPanel: document.getElementById("plotPanel"),
    appTitle: document.getElementById("appTitle"),
    languageLabel: document.getElementById("languageLabel"),
    languageSelect: document.getElementById("languageSelect"),
    metaInfo: document.getElementById("metaInfo"),
    pasteModeBtn: document.getElementById("pasteModeBtn"),
    fileModeBtn: document.getElementById("fileModeBtn"),
    filePanel: document.getElementById("filePanel"),
    fileInputLabel: document.getElementById("fileInputLabel"),
    fileChooseBtn: document.getElementById("fileChooseBtn"),
    fileNameText: document.getElementById("fileNameText"),
    fileInput: document.getElementById("fileInput"),
    sheetSelectLabel: document.getElementById("sheetSelectLabel"),
    sheetSelect: document.getElementById("sheetSelect"),
    orientationLabel: document.getElementById("orientationLabel"),
    columnModeBtn: document.getElementById("columnModeBtn"),
    rowModeBtn: document.getElementById("rowModeBtn"),
    headerCheck: document.getElementById("headerCheck"),
    headerCheckLabel: document.getElementById("headerCheckLabel"),
    applyFileBtn: document.getElementById("applyFileBtn"),
    fileStatus: document.getElementById("fileStatus"),
    seriesCountLabel: document.getElementById("seriesCountLabel"),
    seriesCount: document.getElementById("seriesCount"),
    yFields: document.getElementById("yFields"),
    xInputLabel: document.getElementById("xInputLabel"),
    xSourceRow: document.getElementById("xSourceRow"),
    xSourceLabel: document.getElementById("xSourceLabel"),
    xSource: document.getElementById("xSource"),
    xInput: document.getElementById("xInput"),
    plotBtn: document.getElementById("plotBtn"),
    sampleBtn: document.getElementById("sampleBtn"),
    clearBtn: document.getElementById("clearBtn"),
    panBtn: document.getElementById("panBtn"),
    zoomBoxBtn: document.getElementById("zoomBoxBtn"),
    resetBtn: document.getElementById("resetBtn"),
    canvas: document.getElementById("plotCanvas"),
    canvasWrap: document.getElementById("canvasWrap"),
    tooltip: document.getElementById("tooltip"),
    colorPicker: document.getElementById("colorPicker"),
    metricMenu: document.getElementById("metricMenu"),
    pointSelectPrompt: document.getElementById("pointSelectPrompt"),
    pointSelectText: document.getElementById("pointSelectText"),
    cancelPointSelectBtn: document.getElementById("cancelPointSelectBtn"),
    status: document.getElementById("status"),
    message: document.getElementById("message"),
    swatches: document.getElementById("swatches")
  };

  const ctx = els.canvas.getContext("2d");
  const state = {
    traces: [],
    bounds: null,
    view: null,
    mode: "pan",
    dragging: false,
    dragStart: null,
    startView: null,
    selection: null,
    hover: null,
    colorTarget: null,
    selectedTrace: null,
    metricSelections: {},
    gainOffsetResults: {},
    pointSelection: null,
    xKind: "number",
    xLabels: [],
    lang: "zh",
    lastMessage: null,
    lastFileStatus: null,
    fileName: "",
    inputMode: "paste",
    fileSheets: [],
    currentSheetIndex: 0,
    fileOrientation: "column",
    fileHasHeader: true,
    layoutRatio: 0.34,
    layoutDragging: false,
    dpr: 1,
    rect: { left: 70, right: 22, top: 24, bottom: 52, width: 0, height: 0 }
  };

  let canvasResizeFrame = 0;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function t(key, args = {}) {
    const template = I18N[state.lang]?.[key] ?? I18N.zh[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, name) => args[name] ?? "");
  }

  function setText(el, text) {
    if (el) el.textContent = text;
  }

  function setFileStatus(key, args = {}, type = "") {
    state.lastFileStatus = { key, args, type };
    els.fileStatus.textContent = t(key, args);
    els.fileStatus.className = `file-status full ${type}`.trim();
  }

  function refreshLastMessage() {
    if (!state.lastMessage) return;
    els.message.textContent = t(state.lastMessage.key, state.lastMessage.args);
    els.message.className = `message ${state.lastMessage.type || ""}`.trim();
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = t("appTitle");
    setText(els.appTitle, t("appTitle"));
    setText(els.languageLabel, t("language"));
    setText(els.seriesCountLabel, t("yCurveCount"));
    setText(els.metaInfo, t("metaInfo"));
    setText(els.pasteModeBtn, t("pasteMode"));
    setText(els.fileModeBtn, t("fileMode"));
    setText(els.fileInputLabel, t("fileInput"));
    setText(els.fileChooseBtn, t("chooseFile"));
    setText(els.fileNameText, state.fileName || t("noFileChosen"));
    setText(els.sheetSelectLabel, t("sheet"));
    setText(els.orientationLabel, t("orientation"));
    setText(els.columnModeBtn, t("byColumn"));
    setText(els.rowModeBtn, t("byRow"));
    setText(els.headerCheckLabel, t("header"));
    setText(els.applyFileBtn, t("applyFile"));
    setText(els.xInputLabel, t("xData"));
    setText(els.xSourceLabel, t("xSource"));
    setText(els.plotBtn, t("plot"));
    setText(els.sampleBtn, t("sample"));
    setText(els.clearBtn, t("clear"));
    setText(els.panBtn, t("pan"));
    setText(els.zoomBoxBtn, t("box"));
    setText(els.resetBtn, t("reset"));
    els.inputPanel.setAttribute("aria-label", t("inputAria"));
    els.plotPanel.setAttribute("aria-label", t("plotAria"));
    els.layoutSplitter.setAttribute("aria-label", t("resizePanels"));
    els.layoutSplitter.setAttribute("title", t("resizePanels"));
    els.colorPicker.setAttribute("aria-label", t("editColor", { name: "" }).trim());
    els.metricMenu.setAttribute("aria-label", t("metricOptions"));
    els.metricMenu.querySelector('[data-metric="max"]').textContent = t("maxMenu");
    els.metricMenu.querySelector('[data-metric="min"]').textContent = t("minMenu");
    els.metricMenu.querySelector('[data-metric="rms"]').textContent = t("rmsMenu");
    els.metricMenu.querySelector('[data-metric="gainOffset"]').textContent = t("gainOffsetMenu");
    els.cancelPointSelectBtn.setAttribute("title", t("cancelSelection"));
    els.cancelPointSelectBtn.setAttribute("aria-label", t("cancelSelection"));
    if (state.lastFileStatus) {
      els.fileStatus.textContent = t(state.lastFileStatus.key, state.lastFileStatus.args);
      els.fileStatus.className = `file-status full ${state.lastFileStatus.type || ""}`.trim();
    } else {
      setFileStatus("fileEmpty");
    }
    syncYFields();
    renderSourceSelectors();
    renderAllMetricResults();
    renderSwatches();
    updateStatus();
    refreshLastMessage();
    refreshPointSelectionPrompt();
  }

  function niceNumber(value) {
    if (!Number.isFinite(value) || value === 0) return 1;
    const exp = Math.floor(Math.log10(Math.abs(value)));
    const f = Math.abs(value) / Math.pow(10, exp);
    let nf = 1;
    if (f < 1.5) nf = 1;
    else if (f < 3) nf = 2;
    else if (f < 7) nf = 5;
    else nf = 10;
    return Math.sign(value) * nf * Math.pow(10, exp);
  }

  function splitExcelText(text, kind) {
    const clean = text.replace(/\u00a0/g, " ").trim();
    if (!clean) return [];
    const out = [];
    clean.split(/\r?\n/).forEach((line) => {
      const row = line.trim();
      if (!row) return;
      let cells;
      if (row.includes("\t")) {
        cells = row.split("\t");
      } else if (kind === "x" && parseDateValue(row) !== null && !Number.isFinite(parseNumericValue(row))) {
        cells = [row];
      } else if (/[,，;]/.test(row) && !isThousandsNumber(row)) {
        cells = row.split(/[,，;]/);
      } else {
        cells = row.split(/\s+/);
      }
      cells.forEach((cell) => {
        const value = cell.trim();
        if (value) out.push(value);
      });
    });
    return out;
  }

  function isThousandsNumber(text) {
    return /^[-+]?\d{1,3}(,\d{3})+(\.\d+)?%?$/.test(text.trim());
  }

  function parseNumericValue(token) {
    const t = token.trim().replace(/,/g, "");
    if (!t) return NaN;
    if (/%$/.test(t)) {
      const n = Number(t.slice(0, -1));
      return Number.isFinite(n) ? n / 100 : NaN;
    }
    const n = Number(t);
    return Number.isFinite(n) ? n : NaN;
  }

  function parseDateValue(token) {
    const t = token.trim();
    if (!/[/:年月日-]/.test(t)) return null;
    const normalized = t
      .replace(/年/g, "/")
      .replace(/月/g, "/")
      .replace(/日/g, "")
      .replace(/\./g, "/");
    const ms = Date.parse(normalized);
    return Number.isFinite(ms) ? ms : null;
  }

  function parseY(text) {
    return splitExcelText(text, "y")
      .map(parseNumericValue)
      .filter(Number.isFinite);
  }

  function parseX(text) {
    const tokens = splitExcelText(text, "x");
    if (!tokens.length) return { values: [], labels: [], kind: "number" };
    const values = [];
    let numericCount = 0;
    let dateCount = 0;
    let categoryNeeded = false;
    tokens.forEach((token) => {
      const n = parseNumericValue(token);
      if (Number.isFinite(n)) {
        values.push(n);
        numericCount += 1;
        return;
      }
      const ms = parseDateValue(token);
      if (ms !== null) {
        values.push(ms);
        dateCount += 1;
        return;
      }
      categoryNeeded = true;
    });
    if (categoryNeeded || values.length !== tokens.length || (numericCount > 0 && dateCount > 0)) {
      return {
        values: tokens.map((_, index) => index),
        labels: tokens,
        kind: "category"
      };
    }
    return {
      values,
      labels: tokens,
      kind: dateCount > 0 && dateCount === values.length ? "date" : "number"
    };
  }

  function formatNumber(value) {
    if (!Number.isFinite(value)) return "";
    const abs = Math.abs(value);
    if (abs >= 10000 || (abs > 0 && abs < 0.001)) return value.toExponential(2);
    if (abs >= 100) return value.toFixed(0);
    if (abs >= 10) return value.toFixed(1).replace(/\.0$/, "");
    return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  }

  function formatDate(ms) {
    const d = new Date(ms);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const h = String(d.getHours()).padStart(2, "0");
    const min = String(d.getMinutes()).padStart(2, "0");
    const range = state.view ? state.view.xmax - state.view.xmin : 0;
    if (range <= 1000 * 60 * 60 * 24 * 2) return `${m}-${day} ${h}:${min}`;
    if (range <= 1000 * 60 * 60 * 24 * 370) return `${m}-${day}`;
    return `${y}-${m}`;
  }

  function formatX(value) {
    if (state.xKind === "category") {
      const index = Math.round(value);
      return state.xLabels[index] ?? "";
    }
    return state.xKind === "date" ? formatDate(value) : formatNumber(value);
  }

  function columnName(index) {
    let name = "";
    let value = index + 1;
    while (value > 0) {
      const rem = (value - 1) % 26;
      name = String.fromCharCode(65 + rem) + name;
      value = Math.floor((value - 1) / 26);
    }
    return name;
  }

  function columnIndexFromRef(ref) {
    const letters = String(ref || "").match(/[A-Z]+/i)?.[0] || "";
    let index = 0;
    for (const ch of letters.toUpperCase()) {
      index = index * 26 + (ch.charCodeAt(0) - 64);
    }
    return Math.max(0, index - 1);
  }

  function parseCsv(text) {
    const firstLines = text.split(/\r?\n/).slice(0, 8).join("\n");
    const delimiter = (firstLines.match(/\t/g) || []).length > (firstLines.match(/,/g) || []).length ? "\t" : ",";
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;

    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else if (ch === '"') {
          quoted = false;
        } else {
          cell += ch;
        }
      } else if (ch === '"') {
        quoted = true;
      } else if (ch === delimiter) {
        row.push(cell.trim());
        cell = "";
      } else if (ch === "\n") {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      } else if (ch !== "\r") {
        cell += ch;
      }
    }
    row.push(cell.trim());
    if (row.some((value) => value !== "")) rows.push(row);
    return buildTable(rows);
  }

  function buildTable(rows) {
    const nonEmptyRowIndexes = rows
      .map((row, index) => ({ row: row || [], index }))
      .filter(({ row }) => row.some((value) => String(value ?? "").trim() !== ""))
      .map(({ index }) => index);
    const colSet = new Set();
    nonEmptyRowIndexes.forEach((rowIndex) => {
      const row = rows[rowIndex] || [];
      row.forEach((value, colIndex) => {
        if (String(value ?? "").trim() !== "") colSet.add(colIndex);
      });
    });
    const colIndexes = Array.from(colSet).sort((a, b) => a - b);
    return {
      data: nonEmptyRowIndexes.map((rowIndex) => {
        const row = rows[rowIndex] || [];
        return colIndexes.map((colIndex) => String(row[colIndex] ?? "").trim());
      }),
      rowNumbers: nonEmptyRowIndexes.map((rowIndex) => rowIndex + 1),
      colIndexes
    };
  }

  async function inflateZipEntry(bytes) {
    if (typeof DecompressionStream === "undefined") {
      throw new Error(t("unsupportedXlsx"));
    }
    const tryInflate = async (format) => {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream(format));
      return new Uint8Array(await new Response(stream).arrayBuffer());
    };
    try {
      return await tryInflate("deflate-raw");
    } catch {
      return await tryInflate("deflate");
    }
  }

  async function readZipEntries(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    const view = new DataView(arrayBuffer);
    let eocd = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 66000); i -= 1) {
      if (view.getUint32(i, true) === 0x06054b50) {
        eocd = i;
        break;
      }
    }
    if (eocd < 0) throw new Error("ZIP end record not found");
    const total = view.getUint16(eocd + 10, true);
    let offset = view.getUint32(eocd + 16, true);
    const entries = {};
    const decoder = new TextDecoder("utf-8");

    for (let i = 0; i < total; i += 1) {
      if (view.getUint32(offset, true) !== 0x02014b50) break;
      const method = view.getUint16(offset + 10, true);
      const compressedSize = view.getUint32(offset + 20, true);
      const nameLength = view.getUint16(offset + 28, true);
      const extraLength = view.getUint16(offset + 30, true);
      const commentLength = view.getUint16(offset + 32, true);
      const localOffset = view.getUint32(offset + 42, true);
      const name = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));
      const localNameLength = view.getUint16(localOffset + 26, true);
      const localExtraLength = view.getUint16(localOffset + 28, true);
      const dataStart = localOffset + 30 + localNameLength + localExtraLength;
      const compressed = bytes.slice(dataStart, dataStart + compressedSize);
      if (!name.endsWith("/")) {
        if (method === 0) entries[name] = compressed;
        else if (method === 8) entries[name] = await inflateZipEntry(compressed);
      }
      offset += 46 + nameLength + extraLength + commentLength;
    }
    return entries;
  }

  function zipText(entries, path) {
    const entry = entries[path];
    return entry ? new TextDecoder("utf-8").decode(entry) : "";
  }

  function parseXml(text) {
    return new DOMParser().parseFromString(text, "application/xml");
  }

  function elementsByLocalName(root, name) {
    return Array.from(root.getElementsByTagName("*")).filter((el) => el.localName === name);
  }

  function parseSharedStrings(xmlText) {
    if (!xmlText) return [];
    const doc = parseXml(xmlText);
    return elementsByLocalName(doc, "si").map((si) =>
      elementsByLocalName(si, "t").map((tNode) => tNode.textContent || "").join("")
    );
  }

  function parseRelationships(xmlText) {
    const map = {};
    if (!xmlText) return map;
    const doc = parseXml(xmlText);
    elementsByLocalName(doc, "Relationship").forEach((rel) => {
      map[rel.getAttribute("Id")] = rel.getAttribute("Target") || "";
    });
    return map;
  }

  function normalizeSheetPath(target) {
    if (!target) return "";
    if (target.startsWith("/")) return target.slice(1);
    if (target.startsWith("xl/")) return target;
    return `xl/${target}`.replace(/\/[^/]+\/\.\.\//g, "/");
  }

  function cellValue(cell, sharedStrings) {
    const type = cell.getAttribute("t");
    if (type === "inlineStr") {
      return elementsByLocalName(cell, "t").map((node) => node.textContent || "").join("");
    }
    const value = elementsByLocalName(cell, "v")[0]?.textContent ?? "";
    if (type === "s") return sharedStrings[Number(value)] ?? "";
    return value;
  }

  function parseSheetXml(xmlText, sharedStrings) {
    const doc = parseXml(xmlText);
    const rows = [];
    elementsByLocalName(doc, "row").forEach((rowNode, rowPosition) => {
      const rowIndex = Math.max(0, Number(rowNode.getAttribute("r") || rowPosition + 1) - 1);
      rows[rowIndex] = rows[rowIndex] || [];
      let sequentialCol = 0;
      elementsByLocalName(rowNode, "c").forEach((cell) => {
        const ref = cell.getAttribute("r");
        const colIndex = ref ? columnIndexFromRef(ref) : sequentialCol;
        rows[rowIndex][colIndex] = cellValue(cell, sharedStrings);
        sequentialCol = colIndex + 1;
      });
    });
    return buildTable(rows.map((row) => row || []));
  }

  async function parseXlsx(arrayBuffer) {
    const entries = await readZipEntries(arrayBuffer);
    const sharedStrings = parseSharedStrings(zipText(entries, "xl/sharedStrings.xml"));
    const workbookText = zipText(entries, "xl/workbook.xml");
    const rels = parseRelationships(zipText(entries, "xl/_rels/workbook.xml.rels"));
    const sheets = [];

    if (workbookText) {
      const workbook = parseXml(workbookText);
      elementsByLocalName(workbook, "sheet").forEach((sheetNode, index) => {
        const name = sheetNode.getAttribute("name") || t("sheetDefault", { n: index + 1 });
        const rid = sheetNode.getAttribute("r:id") || sheetNode.getAttribute("id");
        const path = normalizeSheetPath(rels[rid]);
        const xml = path ? zipText(entries, path) : "";
        if (xml) sheets.push({ name, ...parseSheetXml(xml, sharedStrings) });
      });
    }

    if (!sheets.length) {
      const names = Object.keys(entries).filter((name) => /^xl\/worksheets\/sheet\d+\.xml$/i.test(name)).sort();
      names.forEach((name, index) => {
        sheets.push({ name: t("sheetDefault", { n: index + 1 }), ...parseSheetXml(zipText(entries, name), sharedStrings) });
      });
    }
    return sheets;
  }

  function currentFileSheet() {
    return state.fileSheets[state.currentSheetIndex] || null;
  }

  function sourceItems() {
    const sheet = currentFileSheet();
    const data = sheet?.data || [];
    if (!data.length) return [];
    if (state.fileOrientation === "column") {
      const count = sheet.colIndexes?.length || Math.max(0, ...data.map((row) => row.length));
      return Array.from({ length: count }, (_, index) => {
        const excelColIndex = sheet.colIndexes?.[index] ?? index;
        const col = columnName(excelColIndex);
        const header = state.fileHasHeader ? data[0]?.[index] : "";
        return {
          value: String(index),
          coord: col,
          name: header || col,
          label: header ? `${col}: ${header}` : t("column", { name: col })
        };
      });
    }
    return data.map((row, index) => {
      const rowNumber = sheet.rowNumbers?.[index] ?? index + 1;
      const header = state.fileHasHeader ? row[0] : "";
      return {
        value: String(index),
        coord: String(rowNumber),
        name: header || t("row", { n: rowNumber }),
        label: header ? `${t("row", { n: rowNumber })}: ${header}` : t("row", { n: rowNumber })
      };
    });
  }

  function sourceDisplay(item) {
    if (!item) return "";
    return state.fileOrientation === "column"
      ? t("column", { name: item.coord })
      : t("row", { n: item.coord });
  }

  function setSourceOptions(input, items, preferred = "") {
    if (!input) return;
    const previousIndex = sourceIndexFromCoordinate(preferred || input.value || input.dataset.pendingValue || "");
    const fallbackIndex = Number(input.dataset.fallbackValue);
    const selectedItem = items[previousIndex ?? (Number.isInteger(fallbackIndex) ? fallbackIndex : 0)] || items[0];
    input.value = sourceDisplay(selectedItem);
    input.dataset.sourceIndex = selectedItem?.value || "";
    delete input.dataset.pendingValue;
    delete input.dataset.fallbackValue;

    const datalist = document.getElementById(input.getAttribute("list"));
    if (datalist) {
      datalist.innerHTML = items.map((item) =>
        `<option value="${escapeHtml(sourceDisplay(item))}" label="${escapeHtml(item.label)}"></option>`
      ).join("");
    }
  }

  function sourceIndexFromCoordinate(input) {
    const raw = String(input || "").trim();
    if (!raw) return null;
    const items = sourceItems();
    const lower = raw.toLowerCase();

    const exact = items.find((item) =>
      lower === sourceDisplay(item).toLowerCase() ||
      lower === item.label.toLowerCase() ||
      lower === String(item.coord).toLowerCase()
    );
    if (exact) return Number(exact.value);

    if (state.fileOrientation === "column") {
      const letterGroups = lower.match(/[a-z]+/ig) || [];
      const candidates = letterGroups.map((group) => group.toUpperCase()).filter((group) => group.length <= 3);
      for (const wanted of candidates) {
        const found = items.find((item) => String(item.coord).toUpperCase() === wanted);
        if (found) return Number(found.value);
      }
      const numberMatch = lower.match(/\d+/);
      if (numberMatch) {
        const col = columnName(Number(numberMatch[0]) - 1);
        const found = items.find((item) => String(item.coord).toUpperCase() === col);
        if (found) return Number(found.value);
      }
    } else {
      const match = lower.match(/\d+/);
      if (match) {
        const wanted = match[0];
        const found = items.find((item) => String(item.coord) === wanted);
        if (found) return Number(found.value);
      }
    }
    return null;
  }

  function parseSourceIndex(input, fallbackIndex = 0) {
    const parsed = sourceIndexFromCoordinate(input);
    if (parsed !== null) return parsed;
    return fallbackIndex;
  }

  function renderSheetSelect() {
    els.sheetSelect.innerHTML = state.fileSheets.map((sheet, index) =>
      `<option value="${index}">${escapeHtml(sheet.name || t("sheetDefault", { n: index + 1 }))}</option>`
    ).join("");
    if (state.fileSheets.length) els.sheetSelect.value = String(state.currentSheetIndex);
  }

  function renderSourceSelectors() {
    const visible = state.inputMode === "file" && state.fileSheets.length > 0;
    els.xSourceRow.classList.toggle("visible", visible);
    Array.from(els.yFields.querySelectorAll(".y-source-row")).forEach((row) => row.classList.toggle("visible", visible));
    if (!visible) return;

    const items = sourceItems();
    els.xSource.dataset.fallbackValue = "0";
    setSourceOptions(els.xSource, items, els.xSource.value || "0");
    Array.from(els.yFields.querySelectorAll(".field")).forEach((field, index) => {
      const input = field.querySelector(".y-source");
      if (input) input.dataset.fallbackValue = String(Math.min(index + 1, Math.max(0, items.length - 1)));
      const preferred = input?.dataset.pendingValue || input?.value || input?.dataset.fallbackValue || "0";
      setSourceOptions(input, items, preferred);
    });
  }

  function readSourceValues(sourceIndex) {
    const sheet = currentFileSheet();
    const data = sheet?.data || [];
    if (!data.length) return [];
    if (state.fileOrientation === "column") {
      const start = state.fileHasHeader ? 1 : 0;
      return data.slice(start).map((row) => row[sourceIndex] ?? "");
    }
    const row = data[sourceIndex] || [];
    const start = state.fileHasHeader ? 1 : 0;
    return row.slice(start);
  }

  function sourceName(sourceIndex, fallback) {
    const item = sourceItems().find((entry) => Number(entry.value) === Number(sourceIndex));
    return item?.name || fallback;
  }

  function applyFileToInputs() {
    if (!currentFileSheet()) {
      setMessage("fileNeed", {}, "error");
      return;
    }
    const xIndex = parseSourceIndex(els.xSource.value, 0);
    els.xInput.value = readSourceValues(xIndex).join("\n");
    Array.from(els.yFields.querySelectorAll(".field")).forEach((field, index) => {
      const input = field.querySelector(".y-source");
      const sourceIndex = parseSourceIndex(input?.value || "", Math.min(index + 1, Math.max(0, sourceItems().length - 1)));
      field.querySelector("textarea").value = readSourceValues(sourceIndex).join("\n");
      field.querySelector("input[type='text']").value = sourceName(sourceIndex, `Y${index + 1}`);
    });
    setMessage("fileApplied", {}, "ok");
    plotFromInputs();
  }

  function updateInputModeVisibility() {
    const fileMode = state.inputMode === "file";
    els.filePanel.classList.toggle("active", fileMode);
    els.pasteModeBtn.classList.toggle("active", !fileMode);
    els.fileModeBtn.classList.toggle("active", fileMode);
    const visible = fileMode && state.fileSheets.length > 0;
    els.xSourceRow.classList.toggle("visible", visible);
    Array.from(els.yFields.querySelectorAll(".y-source-row")).forEach((row) => row.classList.toggle("visible", visible));
  }

  async function loadFile(file) {
    if (!file) return;
    try {
      state.fileName = file.name;
      setText(els.fileNameText, state.fileName);
      setFileStatus("fileReading");
      const lower = file.name.toLowerCase();
      let sheets;
      if (lower.endsWith(".csv") || lower.endsWith(".txt")) {
        const text = await file.text();
        sheets = [{ name: file.name, ...parseCsv(text) }];
      } else if (lower.endsWith(".xlsx")) {
        sheets = await parseXlsx(await file.arrayBuffer());
      } else {
        throw new Error(t("fileUnsupported"));
      }
      state.fileSheets = sheets.filter((sheet) => sheet.data.length);
      state.currentSheetIndex = 0;
      renderSheetSelect();
      renderSourceSelectors();
      setFileStatus("fileLoaded", { name: file.name, count: state.fileSheets.length }, "ok");
    } catch (error) {
      state.fileSheets = [];
      renderSheetSelect();
      renderSourceSelectors();
      setFileStatus("fileParseFail", { error: error.message }, "error");
    }
  }

  function createYField(index, name = `Y${index + 1}`) {
    const field = document.createElement("div");
    field.className = "field";
    field.dataset.index = String(index);
    field.innerHTML = `
      <div class="field-top">
        <label for="yInput${index}">${t("yData", { n: index + 1 })}</label>
        <div class="field-tools">
          <input id="yName${index}" type="text" value="${escapeHtml(name)}" aria-label="${t("curveName", { n: index + 1 })}">
          <button class="icon paste-clear" type="button" title="${t("clearYTitle")}" aria-label="${t("clearYTitle")}">×</button>
        </div>
      </div>
      <div class="file-source-row y-source-row">
        <span>${t("ySource")}</span>
        <input class="y-source" data-index="${index}" type="text" list="ySourceOptions${index}">
        <datalist id="ySourceOptions${index}"></datalist>
      </div>
      <textarea id="yInput${index}" spellcheck="false"></textarea>
      <div id="yMetric${index}" class="metric-result" aria-live="polite"></div>
    `;
    field.querySelector(".paste-clear").addEventListener("click", () => {
      field.querySelector("textarea").value = "";
    });
    return field;
  }

  function syncYFields() {
    const count = clamp(Number(els.seriesCount.value) || 1, 1, 12);
    els.seriesCount.value = count;
    const existing = Array.from(els.yFields.querySelectorAll(".field"));
    const data = existing.map((field, index) => ({
      name: field.querySelector(`#yName${index}`)?.value || `Y${index + 1}`,
      text: field.querySelector(`#yInput${index}`)?.value || "",
      source: field.querySelector(".y-source")?.value || ""
    }));

    els.yFields.innerHTML = "";
    for (let i = 0; i < count; i += 1) {
      const field = createYField(i, data[i]?.name || `Y${i + 1}`);
      field.querySelector("textarea").value = data[i]?.text || "";
      els.yFields.appendChild(field);
      const source = field.querySelector(".y-source");
      if (source) source.dataset.pendingValue = data[i]?.source || "";
      renderMetricForField(i);
    }
    updateInputModeVisibility();
    renderSourceSelectors();
    renderSwatches();
  }

  function collectData() {
    const parsedX = parseX(els.xInput.value);
    const traces = [];
    const yAreas = Array.from(els.yFields.querySelectorAll(".field"));

    yAreas.forEach((field, index) => {
      const y = parseY(field.querySelector("textarea").value);
      if (!y.length) return;
      const name = field.querySelector("input[type='text']").value.trim() || `Y${index + 1}`;
      const hasX = parsedX.values.length > 0;
      const len = hasX ? Math.min(parsedX.values.length, y.length) : y.length;
      if (len < 2) return;
      const x = hasX ? parsedX.values.slice(0, len) : Array.from({ length: len }, (_, i) => i + 1);
      const previousTrace = state.traces.find((trace) => trace.fieldIndex === index);
      traces.push({
        name,
        fieldIndex: index,
        color: previousTrace?.color || colors[index % colors.length],
        x,
        y: y.slice(0, len)
      });
    });

    if (!traces.length) {
      throw new Error(t("noData"));
    }

    state.xKind = parsedX.values.length > 0 ? parsedX.kind : "number";
    state.xLabels = parsedX.kind === "category" ? parsedX.labels : [];
    return traces;
  }

  function computeBounds(traces) {
    let xmin = Infinity;
    let xmax = -Infinity;
    let ymin = Infinity;
    let ymax = -Infinity;
    traces.forEach((trace) => {
      trace.x.forEach((x) => {
        xmin = Math.min(xmin, x);
        xmax = Math.max(xmax, x);
      });
      trace.y.forEach((y) => {
        ymin = Math.min(ymin, y);
        ymax = Math.max(ymax, y);
      });
    });

    if (xmin === xmax) {
      xmin -= 1;
      xmax += 1;
    }
    if (ymin === ymax) {
      ymin -= 1;
      ymax += 1;
    }

    const xPad = (xmax - xmin) * 0.04;
    const yPad = (ymax - ymin) * 0.08;
    return {
      xmin: xmin - xPad,
      xmax: xmax + xPad,
      ymin: ymin - yPad,
      ymax: ymax + yPad
    };
  }

  function setMessage(key, args = {}, type = "") {
    state.lastMessage = { key, args, type };
    els.message.textContent = t(key, args);
    els.message.className = `message ${type}`.trim();
  }

  function setMessageText(text, type = "") {
    state.lastMessage = null;
    els.message.textContent = text;
    els.message.className = `message ${type}`.trim();
  }

  function plotFromInputs() {
    try {
      if (state.pointSelection) cancelPointSelection();
      const selectedFieldIndex = state.selectedTrace?.fieldIndex;
      state.traces = collectData();
      state.bounds = computeBounds(state.traces);
      state.view = { ...state.bounds };
      state.selectedTrace = state.traces.find((trace) => trace.fieldIndex === selectedFieldIndex) || null;
      state.hover = null;
      setMessage("plotted", { count: state.traces.length }, "ok");
      updateStatus();
      renderAllMetricResults();
      renderSwatches();
      resizeCanvas();
    } catch (error) {
      setMessageText(error.message, "error");
    }
  }

  function updateStatus() {
    if (!state.view) {
      els.status.textContent = t("waitData");
      return;
    }
    els.status.textContent = t("xRange", {
      xmin: formatX(state.view.xmin),
      xmax: formatX(state.view.xmax),
      ymin: formatNumber(state.view.ymin),
      ymax: formatNumber(state.view.ymax)
    });
  }

  function findTraceByFieldIndex(fieldIndex) {
    return state.traces.find((trace) => trace.fieldIndex === fieldIndex) || null;
  }

  function renderSwatches() {
    const count = clamp(Number(els.seriesCount.value) || 1, 1, 12);
    els.swatches.innerHTML = "";
    for (let i = 0; i < count; i += 1) {
      const trace = findTraceByFieldIndex(i);
      const swatch = document.createElement("span");
      swatch.className = "swatch";
      if (state.selectedTrace?.fieldIndex === i) swatch.classList.add("selected");
      swatch.style.background = trace?.color || colors[i % colors.length];
      swatch.title = trace ? trace.name : `Y${i + 1}`;
      els.swatches.appendChild(swatch);
    }
  }

  function appLayoutMetrics() {
    const style = getComputedStyle(els.appShell);
    const horizontalPadding = (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0);
    const contentWidth = Math.max(1, els.appShell.clientWidth - horizontalPadding);
    const splitterWidth = els.layoutSplitter.offsetWidth || 6;
    const minInput = Math.min(260, Math.max(160, contentWidth * 0.28));
    const minPlot = Math.min(420, Math.max(140, contentWidth * 0.42));
    const maxInput = Math.max(minInput, contentWidth - splitterWidth - minPlot);
    return { contentWidth, splitterWidth, minInput, maxInput };
  }

  function scheduleCanvasResize() {
    if (canvasResizeFrame) return;
    canvasResizeFrame = requestAnimationFrame(() => {
      canvasResizeFrame = 0;
      resizeCanvas();
    });
  }

  function setInputPanelWidth(width, remember = true) {
    const metrics = appLayoutMetrics();
    const clamped = clamp(width, metrics.minInput, metrics.maxInput);
    els.appShell.style.setProperty("--input-width", `${clamped}px`);
    if (remember) {
      state.layoutRatio = clamped / Math.max(1, metrics.contentWidth - metrics.splitterWidth);
    }
    els.layoutSplitter.setAttribute("aria-valuemin", String(Math.round(metrics.minInput)));
    els.layoutSplitter.setAttribute("aria-valuemax", String(Math.round(metrics.maxInput)));
    els.layoutSplitter.setAttribute("aria-valuenow", String(Math.round(clamped)));
    scheduleCanvasResize();
  }

  function applyResponsiveLayout() {
    const metrics = appLayoutMetrics();
    const availableWidth = Math.max(1, metrics.contentWidth - metrics.splitterWidth);
    setInputPanelWidth(availableWidth * state.layoutRatio, false);
  }

  function splitterWidthFromPointer(clientX) {
    const rect = els.appShell.getBoundingClientRect();
    const style = getComputedStyle(els.appShell);
    const paddingLeft = parseFloat(style.paddingLeft) || 0;
    return clientX - rect.left - paddingLeft;
  }

  function resizeCanvas() {
    const rect = els.canvasWrap.getBoundingClientRect();
    state.dpr = window.devicePixelRatio || 1;
    els.canvas.width = Math.max(1, Math.floor(rect.width * state.dpr));
    els.canvas.height = Math.max(1, Math.floor(rect.height * state.dpr));
    els.canvas.style.width = `${rect.width}px`;
    els.canvas.style.height = `${rect.height}px`;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    state.rect.width = rect.width;
    state.rect.height = rect.height;
    draw();
  }

  function plotRect() {
    return {
      x: state.rect.left,
      y: state.rect.top,
      w: Math.max(10, state.rect.width - state.rect.left - state.rect.right),
      h: Math.max(10, state.rect.height - state.rect.top - state.rect.bottom)
    };
  }

  function xToPx(x) {
    const r = plotRect();
    return r.x + ((x - state.view.xmin) / (state.view.xmax - state.view.xmin)) * r.w;
  }

  function yToPx(y) {
    const r = plotRect();
    return r.y + r.h - ((y - state.view.ymin) / (state.view.ymax - state.view.ymin)) * r.h;
  }

  function pxToX(px) {
    const r = plotRect();
    return state.view.xmin + ((px - r.x) / r.w) * (state.view.xmax - state.view.xmin);
  }

  function pxToY(py) {
    const r = plotRect();
    return state.view.ymax - ((py - r.y) / r.h) * (state.view.ymax - state.view.ymin);
  }

  function makeTicks(min, max, target = 8) {
    const span = max - min;
    if (!Number.isFinite(span) || span <= 0) return [];
    const step = Math.abs(niceNumber(span / target));
    const start = Math.ceil(min / step) * step;
    const ticks = [];
    for (let v = start; v <= max + step * 0.5; v += step) {
      ticks.push(Number(v.toPrecision(14)));
      if (ticks.length > 100) break;
    }
    return ticks;
  }

  function makeCategoryTicks(min, max, target = 8) {
    const lastIndex = state.xLabels.length - 1;
    if (lastIndex < 0) return [];
    const start = clamp(Math.ceil(min), 0, lastIndex);
    const end = clamp(Math.floor(max), 0, lastIndex);
    if (end < start) return [];
    const visibleCount = end - start + 1;
    const step = Math.max(1, Math.ceil(visibleCount / target));
    const ticks = [];
    for (let v = start; v <= end; v += step) {
      ticks.push(v);
    }
    return ticks;
  }

  function drawGridAndAxes() {
    const r = plotRect();
    ctx.clearRect(0, 0, state.rect.width, state.rect.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, state.rect.width, state.rect.height);

    if (!state.view) {
      ctx.fillStyle = "#667085";
      ctx.font = "14px Segoe UI, Microsoft YaHei, Arial";
      ctx.textAlign = "center";
      ctx.fillText(t("waitData"), state.rect.width / 2, state.rect.height / 2);
      return;
    }

    ctx.strokeStyle = "#edf0f4";
    ctx.lineWidth = 1;
    ctx.font = "12px Segoe UI, Microsoft YaHei, Arial";
    ctx.fillStyle = "#667085";
    ctx.textBaseline = "middle";

    const xTarget = Math.max(2, Math.floor(r.w / 84));
    const xTicks = state.xKind === "category"
      ? makeCategoryTicks(state.view.xmin, state.view.xmax, xTarget)
      : makeTicks(state.view.xmin, state.view.xmax, 8);
    const yTicks = makeTicks(state.view.ymin, state.view.ymax, 7);

    xTicks.forEach((tick) => {
      const x = xToPx(tick);
      ctx.beginPath();
      ctx.moveTo(x, r.y);
      ctx.lineTo(x, r.y + r.h);
      ctx.stroke();
      ctx.fillStyle = "#667085";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(formatX(tick), x, r.y + r.h + 10);
    });

    yTicks.forEach((tick) => {
      const y = yToPx(tick);
      ctx.beginPath();
      ctx.moveTo(r.x, y);
      ctx.lineTo(r.x + r.w, y);
      ctx.stroke();
      ctx.fillStyle = "#667085";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(formatNumber(tick), r.x - 10, y);
    });

    ctx.strokeStyle = "#9aa4b2";
    ctx.lineWidth = 1;
    ctx.strokeRect(r.x, r.y, r.w, r.h);
  }

  function drawTraces() {
    if (!state.view || !state.traces.length) return;
    const r = plotRect();
    ctx.save();
    ctx.beginPath();
    ctx.rect(r.x, r.y, r.w, r.h);
    ctx.clip();

    state.traces.forEach((trace) => {
      const selected = state.selectedTrace?.fieldIndex === trace.fieldIndex;
      const strokeTrace = (lineWidth, color) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        trace.x.forEach((x, index) => {
          const px = xToPx(x);
          const py = yToPx(trace.y[index]);
          if (index === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
      };

      if (selected) strokeTrace(7, "rgba(31, 41, 51, 0.16)");
      strokeTrace(selected ? 3 : 2, trace.color);

      if (trace.x.length <= 160) {
        ctx.fillStyle = trace.color;
        const pointRadius = selected ? 3.2 : 2.4;
        trace.x.forEach((x, index) => {
          const px = xToPx(x);
          const py = yToPx(trace.y[index]);
          if (px < r.x - 3 || px > r.x + r.w + 3 || py < r.y - 3 || py > r.y + r.h + 3) return;
          ctx.beginPath();
          ctx.arc(px, py, pointRadius, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    });
    ctx.restore();
  }

  function drawLegend() {
    if (!state.traces.length) return;
    const r = plotRect();
    const lineHeight = 20;
    const padding = 8;
    const maxWidth = 180;
    ctx.font = "12px Segoe UI, Microsoft YaHei, Arial";
    const width = Math.min(maxWidth, Math.max(92, ...state.traces.map((t) => ctx.measureText(t.name).width + 44)));
    const height = state.traces.length * lineHeight + padding * 2;
    const x = r.x + r.w - width - 10;
    const y = r.y + 10;

    ctx.save();
    ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
    ctx.strokeStyle = "#d7dce3";
    ctx.lineWidth = 1;
    roundedRect(x, y, width, height, 6);
    ctx.fill();
    ctx.stroke();

    ctx.textBaseline = "middle";
    state.traces.forEach((trace, index) => {
      const yy = y + padding + index * lineHeight + lineHeight / 2;
      ctx.strokeStyle = trace.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + 10, yy);
      ctx.lineTo(x + 30, yy);
      ctx.stroke();
      ctx.fillStyle = "#1f2933";
      ctx.textAlign = "left";
      ctx.fillText(trace.name, x + 38, yy, width - 46);
    });
    ctx.restore();
  }

  function roundedRect(x, y, w, h, radius) {
    const rr = Math.min(radius, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  function drawHover() {
    if (!state.hover || !state.view) return;
    const { px, py, trace } = state.hover;
    const r = plotRect();

    ctx.save();
    ctx.strokeStyle = "rgba(31, 41, 51, 0.35)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(px, r.y);
    ctx.lineTo(px, r.y + r.h);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = trace.color;
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  function drawPointSelection() {
    if (!state.pointSelection?.points?.length || !state.view) return;
    ctx.save();
    ctx.font = "12px Segoe UI, Microsoft YaHei, Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    state.pointSelection.points.forEach((point, index) => {
      const px = xToPx(point.x);
      const py = yToPx(point.y);
      ctx.fillStyle = state.pointSelection.trace.color;
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#1f2933";
      ctx.fillText(`P${index + 1}`, px + 8, py - 6);
    });
    ctx.restore();
  }

  function drawSelection() {
    if (!state.selection) return;
    const { x1, y1, x2, y2 } = state.selection;
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);
    const w = Math.abs(x2 - x1);
    const h = Math.abs(y2 - y1);
    ctx.save();
    ctx.fillStyle = "rgba(36, 107, 254, 0.12)";
    ctx.strokeStyle = "#246bfe";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
    ctx.restore();
  }

  function draw() {
    drawGridAndAxes();
    drawTraces();
    drawHover();
    drawPointSelection();
    drawSelection();
    drawLegend();
  }

  function resetView() {
    if (!state.bounds) return;
    state.view = { ...state.bounds };
    state.hover = null;
    state.selection = null;
    hideTooltip();
    updateStatus();
    draw();
  }

  function setMode(mode) {
    if (state.pointSelection) cancelPointSelection();
    state.mode = mode;
    els.panBtn.classList.toggle("active", mode === "pan");
    els.zoomBoxBtn.classList.toggle("active", mode === "box");
    els.canvas.classList.toggle("pan-mode", mode === "pan");
    state.selection = null;
    draw();
  }

  function pointerPosition(event) {
    const rect = els.canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  function insidePlot(pos) {
    const r = plotRect();
    return pos.x >= r.x && pos.x <= r.x + r.w && pos.y >= r.y && pos.y <= r.y + r.h;
  }

  function panTo(pos) {
    const dx = pos.x - state.dragStart.x;
    const dy = pos.y - state.dragStart.y;
    const r = plotRect();
    const xSpan = state.startView.xmax - state.startView.xmin;
    const ySpan = state.startView.ymax - state.startView.ymin;
    const xShift = -(dx / r.w) * xSpan;
    const yShift = (dy / r.h) * ySpan;
    state.view = {
      xmin: state.startView.xmin + xShift,
      xmax: state.startView.xmax + xShift,
      ymin: state.startView.ymin + yShift,
      ymax: state.startView.ymax + yShift
    };
    updateStatus();
  }

  function zoomAt(pos, factor) {
    if (!state.view || !insidePlot(pos)) return;
    const cx = pxToX(pos.x);
    const cy = pxToY(pos.y);
    const xmin = cx - (cx - state.view.xmin) * factor;
    const xmax = cx + (state.view.xmax - cx) * factor;
    const ymin = cy - (cy - state.view.ymin) * factor;
    const ymax = cy + (state.view.ymax - cy) * factor;
    state.view = { xmin, xmax, ymin, ymax };
    updateStatus();
    draw();
  }

  function distanceToSegment(pos, a, b) {
    const dx = b.px - a.px;
    const dy = b.py - a.py;
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) {
      return {
        dist: Math.hypot(pos.x - a.px, pos.y - a.py),
        t: 0,
        px: a.px,
        py: a.py
      };
    }
    const t = clamp(((pos.x - a.px) * dx + (pos.y - a.py) * dy) / lenSq, 0, 1);
    const px = a.px + dx * t;
    const py = a.py + dy * t;
    return {
      dist: Math.hypot(pos.x - px, pos.y - py),
      t,
      px,
      py
    };
  }

  function nearestPointOnTrace(pos, trace, threshold = 14) {
    if (!state.view || !trace?.x?.length) return null;
    let best = null;
    let bestDist = Infinity;
    for (let index = 0; index < trace.x.length - 1; index += 1) {
      const a = {
        px: xToPx(trace.x[index]),
        py: yToPx(trace.y[index]),
        x: trace.x[index],
        y: trace.y[index]
      };
      const b = {
        px: xToPx(trace.x[index + 1]),
        py: yToPx(trace.y[index + 1]),
        x: trace.x[index + 1],
        y: trace.y[index + 1]
      };
      const near = distanceToSegment(pos, a, b);
      if (near.dist < bestDist) {
        bestDist = near.dist;
        best = {
          trace,
          index,
          distance: near.dist,
          px: near.px,
          py: near.py,
          x: a.x + (b.x - a.x) * near.t,
          y: a.y + (b.y - a.y) * near.t
        };
      }
    }
    return bestDist <= threshold ? best : null;
  }

  function nearestPoint(pos, threshold = 14) {
    if (!state.view || !state.traces.length) return null;
    let best = null;
    state.traces.forEach((trace) => {
      const candidate = nearestPointOnTrace(pos, trace, threshold);
      if (candidate && (!best || candidate.distance < best.distance)) best = candidate;
    });
    return best;
  }

  function showTooltip(point) {
    if (!point) {
      hideTooltip();
      return;
    }
    els.tooltip.style.display = "block";
    els.tooltip.innerHTML = `<strong>${escapeHtml(point.trace.name)}</strong><br>X: ${formatX(point.x)}<br>Y: ${formatNumber(point.y)}`;
    const wrapRect = els.canvasWrap.getBoundingClientRect();
    const tipRect = els.tooltip.getBoundingClientRect();
    const x = clamp(point.px + 14, 8, wrapRect.width - tipRect.width - 8);
    const y = clamp(point.py - tipRect.height - 12, 8, wrapRect.height - tipRect.height - 8);
    els.tooltip.style.left = `${x}px`;
    els.tooltip.style.top = `${y}px`;
  }

  function hideTooltip() {
    els.tooltip.style.display = "none";
  }

  function normalizeColor(color) {
    return /^#[0-9a-f]{6}$/i.test(color) ? color : "#246bfe";
  }

  function openColorPicker(point) {
    if (!point?.trace) return;
    state.colorTarget = point.trace;
    els.colorPicker.value = normalizeColor(point.trace.color);
    setMessage("editColor", { name: point.trace.name }, "ok");
    els.colorPicker.click();
  }

  function applySelectedColor() {
    if (!state.colorTarget) return;
    state.colorTarget.color = els.colorPicker.value;
    setMessage("colorChanged", { name: state.colorTarget.name }, "ok");
    renderSwatches();
    draw();
  }

  function selectTrace(trace, point = null) {
    if (!trace) return;
    state.selectedTrace = trace;
    if (point) state.hover = point;
    renderSwatches();
  }

  function setPointSelectionPrompt(key, args = {}, isError = false) {
    if (!state.pointSelection) return;
    state.pointSelection.promptKey = key;
    state.pointSelection.promptArgs = args;
    state.pointSelection.promptError = isError;
    els.pointSelectText.textContent = t(key, args);
    els.pointSelectPrompt.classList.add("active");
    els.pointSelectPrompt.classList.toggle("error", isError);
  }

  function refreshPointSelectionPrompt() {
    if (!state.pointSelection) return;
    setPointSelectionPrompt(
      state.pointSelection.promptKey || "selectFirstPoint",
      state.pointSelection.promptArgs || { name: state.pointSelection.trace.name },
      Boolean(state.pointSelection.promptError)
    );
  }

  function cancelPointSelection() {
    state.pointSelection = null;
    state.hover = null;
    els.pointSelectPrompt.classList.remove("active", "error");
    els.canvas.classList.remove("point-selecting");
    hideTooltip();
    draw();
  }

  function startGainOffsetSelection() {
    if (!state.selectedTrace) return;
    state.pointSelection = {
      trace: state.selectedTrace,
      points: [],
      promptKey: "selectFirstPoint",
      promptArgs: { name: state.selectedTrace.name },
      promptError: false
    };
    els.canvas.classList.add("point-selecting");
    hideMetricMenu();
    hideTooltip();
    refreshPointSelectionPrompt();
    draw();
  }

  function selectGainOffsetPoint(event) {
    if (!state.pointSelection) return;
    const pos = pointerPosition(event);
    if (!insidePlot(pos)) return;
    const point = nearestPointOnTrace(pos, state.pointSelection.trace, 24);
    if (!point) {
      setPointSelectionPrompt("pointSelectionMiss", {}, true);
      return;
    }

    if (!state.pointSelection.points.length) {
      state.pointSelection.points.push({ x: point.x, y: point.y });
      state.hover = point;
      setPointSelectionPrompt("selectSecondPoint", {}, false);
      showTooltip(point);
      draw();
      return;
    }

    const first = state.pointSelection.points[0];
    const xTolerance = Math.max(1e-12, Math.abs(state.view.xmax - state.view.xmin) * 1e-9);
    if (Math.abs(point.x - first.x) <= xTolerance) {
      setPointSelectionPrompt("sameXError", {}, true);
      return;
    }

    const second = { x: point.x, y: point.y };
    const gain = (second.y - first.y) / (second.x - first.x);
    const offset = first.y - gain * first.x;
    const trace = state.pointSelection.trace;
    const fieldIndex = trace.fieldIndex;
    state.pointSelection.points.push(second);
    state.gainOffsetResults[fieldIndex] = {
      gain,
      offset,
      points: [{ ...first }, { ...second }]
    };
    cancelPointSelection();
    renderMetricForField(fieldIndex);
    setMessage("gainOffsetComputed", { name: trace.name }, "ok");
  }

  function metricLabel(type) {
    return t(type) || type.toUpperCase();
  }

  function computeMetric(trace, type) {
    if (!trace?.y?.length) return null;
    if (type === "rms") {
      const sumSq = trace.y.reduce((sum, value) => sum + value * value, 0);
      return { type, value: Math.sqrt(sumSq / trace.y.length) };
    }

    let bestIndex = 0;
    for (let index = 1; index < trace.y.length; index += 1) {
      if (type === "max" && trace.y[index] > trace.y[bestIndex]) bestIndex = index;
      if (type === "min" && trace.y[index] < trace.y[bestIndex]) bestIndex = index;
    }
    return {
      type,
      value: trace.y[bestIndex],
      x: trace.x[bestIndex],
      index: bestIndex
    };
  }

  function metricText(trace, result) {
    if (!trace || !result) return "";
    const label = metricLabel(result.type);
    const sep = state.lang === "zh" ? "：" : ": ";
    if (result.type === "rms") {
      return `${trace.name}${sep}${label} = ${formatNumber(result.value)}`;
    }
    const joiner = state.lang === "zh" ? "，" : ", ";
    return `${trace.name}${sep}${label} = ${formatNumber(result.value)}${joiner}${t("xMetric", { x: formatX(result.x) })}`;
  }

  function renderMetricForField(fieldIndex) {
    const el = document.getElementById(`yMetric${fieldIndex}`);
    if (!el) return;
    const types = state.metricSelections[fieldIndex] || [];
    const trace = findTraceByFieldIndex(fieldIndex);
    const gainOffsetResult = state.gainOffsetResults[fieldIndex];
    const rows = trace
      ? types.map((type) => ({ type, result: computeMetric(trace, type) })).filter((item) => item.result)
      : [];
    const metricRows = rows.map(({ type, result }) => `
      <div class="metric-row">
        <span>${escapeHtml(metricText(trace, result))}</span>
        <button class="metric-clear" type="button" title="${t("metricClear")}" aria-label="${t("metricClear")} ${metricLabel(type)}" data-field-index="${fieldIndex}" data-metric="${type}">×</button>
      </div>
    `).join("");
    const gainOffsetRow = trace && gainOffsetResult ? `
      <div class="metric-row">
        <span class="metric-details">
          <strong>${escapeHtml(`${trace.name}${state.lang === "zh" ? "：" : ": "}${t("gainOffset")}`)}</strong>
          <span>${escapeHtml(t("gainValue", { value: formatNumber(gainOffsetResult.gain) }))}</span>
          <span>${escapeHtml(t("offsetValue", { value: formatNumber(gainOffsetResult.offset) }))}</span>
          <span>${escapeHtml(t("pointValue", { point: "P1", x: formatX(gainOffsetResult.points[0].x), y: formatNumber(gainOffsetResult.points[0].y) }))}</span>
          <span>${escapeHtml(t("pointValue", { point: "P2", x: formatX(gainOffsetResult.points[1].x), y: formatNumber(gainOffsetResult.points[1].y) }))}</span>
        </span>
        <button class="metric-clear" type="button" title="${t("metricClear")}" aria-label="${t("metricClear")} ${t("gainOffset")}" data-field-index="${fieldIndex}" data-metric="gainOffset">×</button>
      </div>
    ` : "";
    el.innerHTML = metricRows + gainOffsetRow;
    el.classList.toggle("active", rows.length > 0 || Boolean(gainOffsetRow));
  }

  function renderAllMetricResults() {
    const count = clamp(Number(els.seriesCount.value) || 1, 1, 12);
    for (let i = 0; i < count; i += 1) {
      renderMetricForField(i);
    }
  }

  function chooseMetric(type) {
    if (!state.selectedTrace) return;
    const fieldIndex = state.selectedTrace.fieldIndex;
    const selections = state.metricSelections[fieldIndex] || [];
    if (!selections.includes(type)) selections.push(type);
    state.metricSelections[fieldIndex] = selections;
    renderMetricForField(fieldIndex);
    setMessage("metricComputed", { name: state.selectedTrace.name, metric: metricLabel(type) }, "ok");
  }

  function clearMetric(fieldIndex, type) {
    if (type === "gainOffset") {
      delete state.gainOffsetResults[fieldIndex];
      renderMetricForField(fieldIndex);
      return;
    }
    const selections = state.metricSelections[fieldIndex] || [];
    state.metricSelections[fieldIndex] = selections.filter((item) => item !== type);
    if (!state.metricSelections[fieldIndex].length) delete state.metricSelections[fieldIndex];
    renderMetricForField(fieldIndex);
  }

  function showMetricMenu(pos) {
    if (!state.selectedTrace) return;
    els.metricMenu.style.display = "block";
    const wrapRect = els.canvasWrap.getBoundingClientRect();
    const menuRect = els.metricMenu.getBoundingClientRect();
    const x = clamp(pos.x + 4, 8, wrapRect.width - menuRect.width - 8);
    const y = clamp(pos.y + 4, 8, wrapRect.height - menuRect.height - 8);
    els.metricMenu.style.left = `${x}px`;
    els.metricMenu.style.top = `${y}px`;
  }

  function hideMetricMenu() {
    els.metricMenu.style.display = "none";
  }

  function clearSelectedTrace() {
    if (!state.selectedTrace && !state.hover) return;
    state.selectedTrace = null;
    state.hover = null;
    hideTooltip();
    renderSwatches();
    draw();
  }

  function pickCurveColorAt(pos) {
    const point = insidePlot(pos) ? nearestPoint(pos, 18) : null;
    if (!point) return false;
    selectTrace(point.trace, point);
    showTooltip(point);
    draw();
    openColorPicker(point);
    return true;
  }

  function escapeHtml(text) {
    return text.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function fillSample() {
    const x = [];
    const y1 = [];
    const y2 = [];
    for (let i = 0; i <= 80; i += 1) {
      const value = i / 8;
      x.push(value.toFixed(3));
      y1.push((Math.sin(value) * 2 + value * 0.18).toFixed(4));
      y2.push((Math.cos(value * 0.72) * 1.5 + value * 0.1).toFixed(4));
    }
    els.seriesCount.value = 2;
    syncYFields();
    els.xInput.value = x.join("\n");
    document.getElementById("yInput0").value = y1.join("\n");
    document.getElementById("yInput1").value = y2.join("\n");
    document.getElementById("yName0").value = "sin";
    document.getElementById("yName1").value = "cos";
    plotFromInputs();
  }

  function clearAll() {
    els.xInput.value = "";
    Array.from(els.yFields.querySelectorAll("textarea")).forEach((area) => {
      area.value = "";
    });
    state.traces = [];
    state.bounds = null;
    state.view = null;
    state.hover = null;
    state.selection = null;
    state.colorTarget = null;
    state.selectedTrace = null;
    state.metricSelections = {};
    state.gainOffsetResults = {};
    state.pointSelection = null;
    state.xKind = "number";
    state.xLabels = [];
    els.pointSelectPrompt.classList.remove("active", "error");
    els.canvas.classList.remove("point-selecting");
    hideTooltip();
    hideMetricMenu();
    updateStatus();
    setMessage("emptyXHint");
    renderAllMetricResults();
    renderSwatches();
    draw();
  }

  function stopLayoutDrag(event) {
    if (!state.layoutDragging) return;
    state.layoutDragging = false;
    els.layoutSplitter.classList.remove("dragging");
    document.body.classList.remove("layout-resizing");
    if (event?.pointerId !== undefined && els.layoutSplitter.hasPointerCapture?.(event.pointerId)) {
      els.layoutSplitter.releasePointerCapture(event.pointerId);
    }
  }

  els.layoutSplitter.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    state.layoutDragging = true;
    els.layoutSplitter.classList.add("dragging");
    document.body.classList.add("layout-resizing");
    els.layoutSplitter.setPointerCapture?.(event.pointerId);
    setInputPanelWidth(splitterWidthFromPointer(event.clientX));
    event.preventDefault();
  });

  els.layoutSplitter.addEventListener("pointermove", (event) => {
    if (!state.layoutDragging) return;
    setInputPanelWidth(splitterWidthFromPointer(event.clientX));
    event.preventDefault();
  });

  els.layoutSplitter.addEventListener("pointerup", stopLayoutDrag);
  els.layoutSplitter.addEventListener("pointercancel", stopLayoutDrag);
  els.layoutSplitter.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const direction = event.key === "ArrowLeft" ? -1 : 1;
    setInputPanelWidth(els.inputPanel.getBoundingClientRect().width + direction * 20);
    event.preventDefault();
  });

  els.seriesCount.addEventListener("change", syncYFields);
  els.seriesCount.addEventListener("input", () => {
    const value = Number(els.seriesCount.value);
    if (Number.isFinite(value) && value >= 1 && value <= 12) syncYFields();
  });
  els.languageSelect.addEventListener("change", () => {
    state.lang = els.languageSelect.value;
    applyLanguage();
  });
  els.pasteModeBtn.addEventListener("click", () => {
    state.inputMode = "paste";
    updateInputModeVisibility();
    renderSourceSelectors();
  });
  els.fileModeBtn.addEventListener("click", () => {
    state.inputMode = "file";
    updateInputModeVisibility();
    renderSourceSelectors();
  });
  els.fileChooseBtn.addEventListener("click", () => {
    els.fileInput.click();
  });
  els.fileInput.addEventListener("change", () => {
    loadFile(els.fileInput.files?.[0]);
  });
  els.sheetSelect.addEventListener("change", () => {
    state.currentSheetIndex = Number(els.sheetSelect.value || 0);
    renderSourceSelectors();
  });
  els.columnModeBtn.addEventListener("click", () => {
    state.fileOrientation = "column";
    els.columnModeBtn.classList.add("active");
    els.rowModeBtn.classList.remove("active");
    renderSourceSelectors();
  });
  els.rowModeBtn.addEventListener("click", () => {
    state.fileOrientation = "row";
    els.rowModeBtn.classList.add("active");
    els.columnModeBtn.classList.remove("active");
    renderSourceSelectors();
  });
  els.headerCheck.addEventListener("change", () => {
    state.fileHasHeader = els.headerCheck.checked;
    renderSourceSelectors();
  });
  els.applyFileBtn.addEventListener("click", applyFileToInputs);
  els.plotBtn.addEventListener("click", plotFromInputs);
  els.sampleBtn.addEventListener("click", fillSample);
  els.clearBtn.addEventListener("click", clearAll);
  els.resetBtn.addEventListener("click", resetView);
  els.panBtn.addEventListener("click", () => setMode("pan"));
  els.zoomBoxBtn.addEventListener("click", () => setMode("box"));
  els.colorPicker.addEventListener("input", applySelectedColor);
  els.colorPicker.addEventListener("change", applySelectedColor);
  els.metricMenu.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-metric]");
    if (!button) return;
    if (button.dataset.metric === "gainOffset") startGainOffsetSelection();
    else chooseMetric(button.dataset.metric);
    hideMetricMenu();
  });
  els.cancelPointSelectBtn.addEventListener("click", cancelPointSelection);
  els.yFields.addEventListener("click", (event) => {
    const button = event.target.closest(".metric-clear");
    if (!button) return;
    clearMetric(Number(button.dataset.fieldIndex), button.dataset.metric);
  });
  document.addEventListener("click", (event) => {
    if (!els.metricMenu.contains(event.target)) hideMetricMenu();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideMetricMenu();
      if (state.pointSelection) cancelPointSelection();
    }
  });

  els.canvas.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    if (state.pointSelection) {
      event.preventDefault();
      return;
    }
    if (!state.view) return;
    const pos = pointerPosition(event);
    if (!insidePlot(pos)) return;
    state.dragging = true;
    state.dragStart = pos;
    state.startView = { ...state.view };
    els.canvas.classList.add("dragging");
    hideTooltip();
    hideMetricMenu();
    if (state.mode === "box") {
      state.selection = { x1: pos.x, y1: pos.y, x2: pos.x, y2: pos.y };
    }
  });

  window.addEventListener("mousemove", (event) => {
    const pos = pointerPosition(event);
    if (state.pointSelection) {
      if (!insidePlot(pos)) {
        state.hover = null;
        hideTooltip();
      } else {
        state.hover = nearestPointOnTrace(pos, state.pointSelection.trace, 24);
        showTooltip(state.hover);
      }
      draw();
      return;
    }
    if (state.dragging) {
      if (state.mode === "pan") {
        panTo(pos);
      } else {
        const r = plotRect();
        state.selection = {
          x1: state.dragStart.x,
          y1: state.dragStart.y,
          x2: clamp(pos.x, r.x, r.x + r.w),
          y2: clamp(pos.y, r.y, r.y + r.h)
        };
      }
      draw();
      return;
    }

    if (!insidePlot(pos)) {
      state.hover = null;
      hideTooltip();
      draw();
      return;
    }

    state.hover = nearestPoint(pos);
    showTooltip(state.hover);
    draw();
  });

  window.addEventListener("mouseup", (event) => {
    if (!state.dragging) return;
    const pos = pointerPosition(event);
    const clickDistance = state.dragStart ? Math.hypot(pos.x - state.dragStart.x, pos.y - state.dragStart.y) : Infinity;
    els.canvas.classList.remove("dragging");
    if (state.mode === "box" && state.selection) {
      const s = state.selection;
      if (Math.abs(s.x2 - s.x1) > 8 && Math.abs(s.y2 - s.y1) > 8) {
        const xmin = pxToX(Math.min(s.x1, s.x2));
        const xmax = pxToX(Math.max(s.x1, s.x2));
        const ymin = pxToY(Math.max(s.y1, s.y2));
        const ymax = pxToY(Math.min(s.y1, s.y2));
        state.view = { xmin, xmax, ymin, ymax };
        updateStatus();
      }
      state.selection = null;
      if (clickDistance <= 5) {
        state.dragging = false;
        if (pickCurveColorAt(pos)) return;
        clearSelectedTrace();
        return;
      }
    } else if (state.mode === "pan" && clickDistance <= 5) {
      state.view = { ...state.startView };
      updateStatus();
      state.dragging = false;
      if (pickCurveColorAt(pos)) return;
      clearSelectedTrace();
      return;
    }
    state.dragging = false;
    draw();
  });

  els.canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (state.pointSelection) return;
    if (!state.view) return;
    const pos = pointerPosition(event);
    if (!insidePlot(pos)) {
      hideMetricMenu();
      return;
    }
    const point = nearestPoint(pos, 18);
    if (point) {
      selectTrace(point.trace, point);
      showTooltip(point);
      draw();
    }
    if (state.selectedTrace) {
      showMetricMenu(pos);
    }
  });

  els.canvas.addEventListener("wheel", (event) => {
    if (state.pointSelection) {
      event.preventDefault();
      return;
    }
    if (!state.view) return;
    event.preventDefault();
    const factor = event.deltaY < 0 ? 0.82 : 1.22;
    zoomAt(pointerPosition(event), factor);
  }, { passive: false });

  els.canvas.addEventListener("click", selectGainOffsetPoint);
  els.canvas.addEventListener("dblclick", () => {
    if (!state.pointSelection) resetView();
  });

  window.addEventListener("resize", applyResponsiveLayout);

  if (typeof ResizeObserver !== "undefined") {
    const canvasResizeObserver = new ResizeObserver(scheduleCanvasResize);
    canvasResizeObserver.observe(els.canvasWrap);
  }

  setFileStatus("fileEmpty");
  syncYFields();
  applyResponsiveLayout();
  resizeCanvas();
  fillSample();
  applyLanguage();
})();
