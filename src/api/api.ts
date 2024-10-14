// api.ts
import { Article } from '../types';

export const fetchArticles = async (itemsPerPage: number = 3): Promise<{ articles: Article[], totalCount: number }> => {
    const url = 'https://sheikhdrsultan.ae/Portal/Services/AjaxHandler.asmx/LoadNewsList';

    // SOAP/ASMX services usually require POST requests with parameters in the body
    const body = JSON.stringify({
        itemsPerPage: itemsPerPage, // Include the required parameters here
    });

    const response = await fetch(url, {
        method: 'POST', // Use POST for .asmx service
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: body, // Include the request body
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Assuming the response structure contains an articles array and a totalCount
    return {
        articles: data.articles.map((article: any) => ({
            id: article.id,
            title: article.title,
            description: article.description,
            date: article.date,
            imageUrl: article.imageUrl,
            author: article.author,
            category: article.category,
        })),
        totalCount: data.totalCount,
    };
};
