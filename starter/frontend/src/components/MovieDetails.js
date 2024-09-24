export default function MovieDetails({ movie }) {
    return <>
        <h3>{ movie.title }</h3>
        <p>{ movie.description }</p>
    </>;
}