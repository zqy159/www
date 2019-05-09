import { saveAs } from 'file-saver'
import XLSX from 'xlsx/dist/xlsx.full.min'

function datenum(v, date1904) {
    if (date1904) v += 1462
    let epoch = Date.parse(v)
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}
 
function data2ws(data) {
    const ws = {}
    const range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}}
    for (let R = 0; R != data.length; ++R) {
        for (let C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R
            if (range.s.c > C) range.s.c = C
            if (range.e.r < R) range.e.r = R
            if (range.e.c < C) range.e.c = C
            const cell = { v: data[R][C] }
            if (cell.v == null) continue
            const cell_ref = XLSX.utils.encode_cell({c: C, r: R})
 
            if (typeof cell.v === 'number') cell.t = 'n'
            else if (typeof cell.v === 'boolean') cell.t = 'b'
            else if (cell.v instanceof Date) {
                cell.t = 'n'
                cell.z = XLSX.SSF._table[14]
                cell.v = datenum(cell.v)
            }
            else cell.t = 's'
 
            ws[cell_ref] = cell
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
    return ws
}
function getHeaderRow(sheet) {
    const headers = []
    const range = XLSX.utils.decode_range(sheet['!ref'])
    let C
    const R = range.s.r
    /* start in the first row */
    for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
      const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
      /* find the cell in the first row */
      let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
      if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
      headers.push(hdr)
    }
    return headers
  }

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook()
    this.SheetNames = []
    this.Sheets = {}
}
 
function s2ab(s) {
    const buf = new ArrayBuffer(s.length)
    const view = new Uint8Array(buf)
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
}
 
// 导入
/*
* th => 表头
* filterval => 表头key值
* fileName => 文件名
* fileType => 文件类型
* sheetName => sheet页名
*/
export function downExcel ({list,filterVal,th,fileName, fileType, sheetName}) {
    console.log(list)
    list.map(v => filterVal.map(k => v[k])).unshift(th)
    console.log(list)
    const wb = new Workbook(), ws = data2ws(list)
    // sheetName = sheetName || 'sheet1'
    // wb.SheetNames.push(sheetName)
    console.log(wb)
    // wb.Sheets[sheetName] = ws
    // fileType = fileType || 'xlsx'
    // var wbout = XLSX.write(wb, {bookType: fileType, bookSST: false, type: 'binary'})
    // fileName = fileName || '列表'
    // saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), `${fileName}.${fileType}`)
}

//导出
/*
* obj => 元素对象
* data => 数据
* fileName => 文件名
* fileType => 文件类型
* sheetName => sheet页名
*/
export function uploadExcel({el,thKey},callback){
    console.log(el)
    var wb;//读取完成的数据
    var rABS = false; //是否将文件读取为二进制字符串 
    var list=[]
            if(!el) {
                return;
            }
             
                var f = el.files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    console.log(1)
                    var data = e.target.result;
                    if(rABS) {f
                        wb = XLSX.read(btoa(_this.fixdata(data)), {//手动转化
                            type: 'base64'
                        });
                    } else {
                        wb = XLSX.read(data, {
                            type: 'binary'
                        });
                    }
                    //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
                    //wb.Sheets[Sheet名]获取第一个Sheet的数据
                var data=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                var  header = getHeaderRow(wb.Sheets[wb.SheetNames[0]])
                    data.forEach((item,i)=>{
                        list[i]={}
                        thKey.forEach((key,k)=>{
                                list[i][key]=item[header[k]]
                        })
                    })
                    callback(list)
                    
                };           
            if(rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }      
}

// 打印成文本文件
/*/解析成换行*/
export function doSave(value, type, name) {
    var str=""
    value.forEach((item,i)=>{
        for(var k in item){
            str+=item[k]+" "
        }
        str+="\r\n"
    })
    value=str
    var blob;
    if (typeof window.Blob == "function") {
        blob = new Blob([value], {type: type});
        console.log(blob)
    } else {
        var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder;
        var bb = new BlobBuilder();
        bb.append(value);
        blob = bb.getBlob(type);
    }
    var URL = window.URL || window.webkitURL;
    var bloburl = URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    if ('download' in anchor) {
        anchor.style.visibility = "hidden";
        anchor.href = bloburl;
        anchor.download = name;
        document.body.appendChild(anchor);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        anchor.dispatchEvent(evt);
        document.body.removeChild(anchor);
    } else if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, name);
    } else {
        location.href = bloburl;
    }
}