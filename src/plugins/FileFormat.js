import { ref } from "vue";
import imgPdf from "@/assets/imgFiles/pdf.svg";
import imgWord from "@/assets/imgFiles/word.png";
import imgCompressed from "@/assets/imgFiles/folder.svg";
import imgZip from "@/assets/imgFiles/zip.png";
import imgPicture from "@/assets/imgFiles/picture.png";
import imgRar from "@/assets/imgFiles/rar.png";
import imgPowerpoint from "@/assets/imgFiles/powerpoint.png";

export default {
    install(app) {
        const imgFile = (app.config.globalProperties.$imgFile = ref(""));

        app.config.globalProperties.$FileFormat = (filename) => {
            const lastDotIndex = filename.lastIndexOf(".");
            if (lastDotIndex !== -1) {
                const extension = filename.substring(lastDotIndex + 1).toLowerCase();

                switch (extension) {
                    case "pdf":
                        imgFile.value = imgPdf;
                        break;
                    case "ppt":
                        imgFile.value = imgPowerpoint;
                        break;
                    case "zip":
                    case "7z":
                        imgFile.value = imgZip;
                        break;
                    case "rar":
                        imgFile.value = imgRar;
                        break;
                    case "docx":
                    case "doc":
                        imgFile.value = imgWord;
                        break;
                    case "png":
                    case "tif":
                    case "gif":
                    case "jpeg":
                    case "jpg":

                        imgFile.value = imgPicture;
                        break;
                    default:
                        imgFile.value = imgCompressed;
                        break;
                }
                return imgFile.value;
            } else {
                return "";
            }
        };
    },
};