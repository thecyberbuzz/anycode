var data = [];
var width = 620;
var height = 800;
var pdfName;
var fileName = '';

const createPDF = document.getElementById('create-pdf');

function encodeImageFileAsURL(element) {
    document.getElementById('input-page').style.display = 'none';
    document.getElementById('pdf-page').style.display = 'inline-block';

    const length = element.files.length;
    for (var i = 0; i < length; i++) {
        let file = element.files[i];
        let pdfname = element.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        let obj = {
            list: reader,
            fileName: file.name,
            time: new Date().toString() + i
        }

        reader.onloadend = () => {
            data = [...data, obj];
            pdfName = pdfname.name;
        }
    }

    setTimeout(convertToPDF, 1000);
    element.value = null; // Clear the file input
    setTimeout(saveAsPDF, 1000);
}

function saveAsPDF() {
    document.getElementById('upload-msg').style.display = 'none';
    document.getElementById('convertBtn').style.display = 'inline-block';
}

function handleDelete(e) {
    data = data.filter((item) => item.time !== e.currentTarget.id);
    if (data.length == 0) {
        location.reload();
    } else {
        convertToPDF();
    }
}

async function embedImages() {
    const pdfDoc = await PDFLib.PDFDocument.create();
    for (var i = 0; i < data.length; i++) {
        const jpgUrl = data[i].list.result;
        const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer());

        const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);

        const page = pdfDoc.addPage();
        page.setSize(width, height);
        page.drawImage(jpgImage, {
            x: 20,
            y: 50,
            width: page.getWidth() - 40,
            height: page.getHeight() - 100,
        });
    }

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, pdfName.slice(0, -4), 'application/pdf');

    setTimeout(backToHomepage, 1000);
}

function convertToPDF() {
    createPDF.innerHTML = '';
    data.map((item, i) => {
        const fileItem = document.createElement('div');
        fileItem.setAttribute('class', 'file-item');

        const modify = document.createElement('div');
        modify.setAttribute('class', 'modify');

        const button2 = document.createElement('button');
        button2.setAttribute('class', 'delete-btn');
        button2.setAttribute('id', item.time);
        const remove = document.createElement('i');
        remove.setAttribute('class', 'fa fa-trash');
        button2.appendChild(remove);
        button2.addEventListener('click', (e) => {
            handleDelete(e);
        });

        modify.appendChild(button2);
        fileItem.appendChild(modify);

        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'img-container');
        const img = document.createElement('img');
        img.setAttribute('id', 'img');
        img.src = item.list.result;
        imgContainer.appendChild(img);
        fileItem.appendChild(imgContainer);

        const imgName = document.createElement('p');
        imgName.setAttribute('id', 'img-name');
        imgName.innerHTML = item.fileName;
        fileItem.appendChild(imgName);

        createPDF.appendChild(fileItem);
    });

    const addMoreFile = document.createElement('div');
    addMoreFile.setAttribute('class', 'add-more-file');

    const addFile = document.createElement('div');
    addFile.setAttribute('class', 'inp-cont');

    const input = document.createElement('input');
    input.setAttribute('id', 'inp');
    input.type = 'file';
    input.multiple = true;
    input.onchange = function () {
        encodeImageFileAsURL(this);
    }

    const p = document.createElement('p');
    const i = document.createElement('i');
    i.setAttribute('class', 'fa fa-plus');

    p.appendChild(i);

    const label = document.createElement('label');
    label.htmlFor = 'inp';
    label.innerHTML = 'Add Files';

    addFile.appendChild(p);
    addFile.appendChild(label);
    addFile.appendChild(input);

    addMoreFile.appendChild(addFile);
    createPDF.appendChild(addMoreFile);
}

function backToHomepage() {
    location.reload();
}

// Attach event listener to the "SAVE AS PDF" button
var convertBtn = document.getElementById('convertBtn');
convertBtn.addEventListener('click', embedImages);

// Attach event listener to the "DOWNLOAD" button
var downloadBtn = document.getElementById('download');
downloadBtn.addEventListener('click', embedImages);

// Attach event listener to the "UPLOAD FILES" button
var uploadMsgButton = document.getElementById('upload-msg');
uploadMsgButton.addEventListener('click', function () {
    var uploadFileInput = document.createElement('input');
    uploadFileInput.type = 'file';
    uploadFileInput.accept = '.jpg, .jpeg';
    uploadFileInput.addEventListener('change', function () {
        encodeImageFileAsURL(this);
    });
    uploadFileInput.click();
});

// Attach event listener to the file input for image selection
var uploadFileInput = document.getElementById('upload-file');
uploadFileInput.addEventListener('change', function () {
    encodeImageFileAsURL(this);
});
