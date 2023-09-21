export default function productPage({ params }: { params: { slug: string } }) {
    // Convert the slug back to a title for display (optional)
    const title = params.slug.replace(/-/g, ' ').toUpperCase();

    return (
        <div>
            Here is the specific {title} page.
        </div>
    )
}