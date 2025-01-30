import { Client, Databases, ID, Query } from "appwrite"

const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID
const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(projectId);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {

    //1. Use appwrite SDK to check if term already exist        cons        const result  = await  database.listDocuments(databaseId , cocoll
    try {
        const result = await database.listDocuments(databaseId, collectionId, [
            Query.equal('searchTerm', searchTerm),
        ])
        if (result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(databaseId, collectionId, doc.$id, {
                count: doc.count + 1,
            })

        } else {
            await database.createDocument(databaseId, collectionId, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    } catch (error) { console.error(error) }
}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(databaseId , collectionId , [
            Query.limit(5),
            Query.orderDesc("count")
        ])


        return result.documents;

    }catch(err) {console.error(err)} 
}