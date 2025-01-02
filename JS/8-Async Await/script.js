// Drop

function getFile(file) {
    return new Promise(function (resolve) {
        fakeAjax(file, resolve);
    })
}
async function loadFile(files) {
    let prs = files.map(getFile);
    for (const pr of prs) {
        console.log(await pr);
    }
}
loadFile(['file1', 'file2', 'file3']);

function fakeAjax(url, cb) {
    let fake_response = {

    }
}