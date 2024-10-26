let ImgBox = document.getElementById("ImgBox");
            let qrImage = document.getElementById("qrImage");
            let textQR = document.getElementById("textQR");

            function generateQR(){
                if(textQR.value.length > 0){
                    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQR.value;
                    ImgBox.classList.add("show-img")
                }
                else{
                    textQR.classList.add('error');
                    setTimeout(() => {
                        textQR.classList.remove('error')
                    }, 1000);
                }
            }
			