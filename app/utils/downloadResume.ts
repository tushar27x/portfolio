const download = ()=>{
    const fileName= 'TusharSharma.pdf';
    const filePath = "/Tushar Sharma.pdf";
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default download;