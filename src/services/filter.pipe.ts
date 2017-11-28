import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { Book } from "../interfaces/book.interface";

@Pipe({
    name: 'filter'
})

@Injectable()

export class FilterPipe implements PipeTransform {
    transform(books: Book[], filter: any) {
        if (filter === undefined) return books;
        return books.filter(book => {
            return book.title.toLowerCase().includes(filter.toLowerCase());
        })
    }
}