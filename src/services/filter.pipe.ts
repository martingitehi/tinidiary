import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { Book } from "../interfaces/book.interface";

@Pipe({
    name: 'filterby'
})

@Injectable()

export class FilterPipe implements PipeTransform {
    transform(books: Book[], filter:string) {
        if (filter === undefined) return books;
        return books.filter(b => {
            return b.title.toLowerCase().includes(filter.toLowerCase()) ||
                b.author.toLowerCase().includes(filter.toLowerCase());
        })
    }
}