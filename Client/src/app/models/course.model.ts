export interface Course{
    id:number,
    images:string[],
    name:string,
    description:string,
    chapters:any[],
    coursePrice:number,
    bundlePrice:number,
    rating:number,
    feedback:number,
    category:number,
    expiryDate:Date,
    pdfFile:string
}