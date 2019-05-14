exports.getpost=(req,res)=>{
    res.json({
        post:[{
            tittle:"first post"
        },
        {
            tittle:"second post"
        }]
    })
}