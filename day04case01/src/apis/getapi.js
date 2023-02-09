import service from "@/utils/service.js";

let getapi=(url)=>{
    return new Promise((resolve,reject)=>{
        //    开始写你的数据请求
            service.request({
                url,
                method:"GET"
            }).then((ok)=>{
                resolve(ok)
            }).catch((err)=>{
                reject(err)
            })
       })
}
export default getapi