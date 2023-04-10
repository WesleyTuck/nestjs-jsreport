class BaseDataset{
    user: string;
    companyName: string;
    totalPages: number;
    totalElements: number;
    elementsByPage: number;
    pages: Array<Page>;

    constructor(data: Array<any>, elementsByPage: number){
        this.pages = new Array<Page>();
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

            const page = new Page();

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

class Page{
    data: Array<any>;

    constructor(){
        this.data = new Array<any>();
    }
}

export default BaseDataset;