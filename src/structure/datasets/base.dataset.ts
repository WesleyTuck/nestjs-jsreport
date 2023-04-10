import PageDataset from "./page.dataset";

class BaseDataset{
    totalPages: number;
    totalElements: number;
    elementsByPage: number;
    pages: Array<PageDataset>;

    constructor(data: Array<any>, elementsByPage: number){
        this.pages = new Array<PageDataset>();
        this.setData(data, elementsByPage);
    }

    setData(data: Array<any>, elementsByPage: number){

        this.totalElements = data.length;
        this.elementsByPage = elementsByPage;

        if(this.totalElements % this.elementsByPage == 0){
            this.totalPages = ~~(this.totalElements/this.elementsByPage);
        }else{
            this.totalPages = (~~(this.totalElements/this.elementsByPage))+1;
        }

        let itemsAdded = 0;

        for(let i = 0;i < this.totalPages;i++){

            const page = new PageDataset();

            let ii = 0;

            while(ii < this.elementsByPage){

                if(data[itemsAdded+ii] != undefined){
                    page.data.push(data[itemsAdded+ii]);
                }

                ii++;
            }

            itemsAdded += this.elementsByPage;

            this.pages.push(page);
        }
    }
}

export default BaseDataset;