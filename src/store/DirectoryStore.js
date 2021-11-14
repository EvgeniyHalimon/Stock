import { action, computed, makeObservable, observable } from "mobx"
export default class Store{
    companies = []
    currentPage = 1
    pageLimit = 10
    dataLimit = 10
    companyName = 'APPLE INC'

    // paginatedData(data){
    //     const startIndex = this.currentPage * this.dataLimit - this.dataLimit;
    //     const endIndex = startIndex + this.dataLimit
    //     console.log('inSTORE',this.companies)
    //     data.slice(startIndex, endIndex)
    // }

    setCompanies(array){
        this.companies = array
    }
    setNextPage() {
        this.currentPage++
    }

    setPrevPage() {
        this.currentPage--
    }

    changePage(value) {
        this.currentPage = Number(value)
    }

    setCompanyName(value){
        this.companyName = value
    }
    
    get paginationGroup(){
        let start = Math.floor((this.currentPage - 1) / this.pageLimit) * this.pageLimit;
        return new Array(this.pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    get filterCompany(){
        return this.companies.filter(item => item.name.includes(this.companyName.toUpperCase()))
    }

    constructor(){
        makeObservable(this,{
            currentPage : observable,
            companies : observable,
            setCompanies : action.bound,
            setNextPage : action.bound,
            setPrevPage : action.bound,
            changePage: action.bound,
            paginationGroup : computed,
            // paginatedData : action.bound,
            companyName: observable,
            setCompanyName : action.bound,
            filterCompany : computed,
        })
    }
    
}
