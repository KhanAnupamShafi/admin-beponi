import{l}from"./index-a2cf8386.js";const t=l.enhanceEndpoints({addTagTypes:["AllReviews","SingleReview"]}).injectEndpoints({endpoints:i=>({getAllReviewsByProductId:i.query({query:e=>({url:`/review/allByProductId/${e}`}),providesTags:["AllReviews"]}),getAllReviewsByEmail:i.query({query:e=>({url:`/review/${e}`}),providesTags:["SingleReview"]}),addSingleReview:i.mutation({query:({data:e,userEmail:s})=>({url:`/review/${s}`,method:"POST",body:e}),invalidatesTags:["AllReviews","SingleReview"]}),addUpVoteLike:i.mutation({query:({reviewId:e,userEmail:s})=>({url:`/review/${s}`,method:"PUT",body:{reviewId:e}}),invalidatesTags:["AllReviews"]})})}),{useGetAllReviewsByProductIdQuery:d,useGetAllReviewsByEmailQuery:o,useAddSingleReviewMutation:n,useAddUpVoteLikeMutation:r}=t;export{r as a,d as b,n as c,o as u};
