export default {
    title: "Review",
    name: "review",
    type: "object",
    fields: [
        {
            name: "reviewName",
            type: "string",
            title: "Reviewer\'s Name",
        },
        {
            name: "villaReview",
            type: "text",
            title: "Villa Review",
        },
        {
            name: "reviewRating",
            type: "number",
            title: "Review rating",
        },
        {
            name: "reviewAvatar",
            type: "url",
            title: "Avatar URL",
        },
        {
            name: "reviewDate",
            type: "string",
            title: "Revie Date (Month Year)"
        }
    ]
}