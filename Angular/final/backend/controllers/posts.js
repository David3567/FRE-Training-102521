const Post = require("../models/post");

exports.creatPost = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      imagePath: url + "/images/" + req.file.filename,
      creator: req.userData.userId
    });
    // console.log(req.userData);
    // return res.status(200).json({});
    post.save().then(createdPost => {
      res.status(201).json({
        message: "Post added successfully",
        post: {
          ...createdPost,
          id: createdPost._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: " creating post filed"
      });
    });
  }

  exports.updatePost = (req, res, next) => {
    let imagePath = req.body.imagePath;
    if (req.file) {
      const url = req.protocol + "://" + req.get("host");
      imagePath = url + "/images/" + req.file.filename;
    }
    const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath,
      creator: req.userData.userId
    });
    // console.log(req.userData.userId);
    if (req.userData.userId === "61c2af1b2642ff2c8970ab12") {
      // console.log(request.userData.userId);
      Post.updateOne(
        { _id: req.params.id},
        post
       ).then(result => {
        
        // console.log(result.nModifie);
        // {
        //   acknowledged: true,
        //   modifiedCount: 0,
        //   upsertedId: null,
        //   upsertedCount: 0,
        //   matchedCount: 1
        // }
        if (result.matchedCount > 0) {
          res.status(200).json({ message: "Update successful!" });
        } 
        else {
          res.status(401).json({ message: "Not authorized!" });
        }
       })
       .catch(error => {
        res.status(500).json({
          message:"couldn't update"
        });
      });
    } else {
      Post.updateOne(
        { _id: req.params.id, creator: req.userData.userId },
        post
       ).then(result => {
        if (result.matchedCount > 0) {
          res.status(200).json({ message: "Update successful!" });
        } else {
          res.status(401).json({ message: "Not authorized!" });
        }
       })
       .catch(error => {
        res.status(500).json({
          message:"couldn't update"
        });
      });
    }
  }

  exports.getPosts = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const postQuery = Post.find();
    let fetchedPosts;
    if (pageSize && currentPage) {
      postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    postQuery
      .then(documents => {
        fetchedPosts = documents;
        return Post.count();
      })
      .then(count => {
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: fetchedPosts,
          maxPosts: count
        });
      })
      .catch(error => {
        res.status(500).json({
          mmessage: "Fetching post failed"
        });
      });
  }

  exports.getPost = (req, res, next) => {
    Post.findById(req.params.id).then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        mmessage: "Fetching post failed"
      });
    });
  }

  exports.deletePost = (req, res, next) => {
    if (req.userData.userId === "61c2af1b2642ff2c8970ab12") {
      Post.deleteOne({ _id: req.params.id}).then(
        result => {
          // console.log(result);
          if (result.deletedCount > 0) {
            res.status(200).json({ message: "Deletion successful!" });
          } else {
            res.status(401).json({ message: "Not authorized!" });
          }
        }
      )
      .catch(error => {
        res.status(500).json({
          mmessage: "Fetching post failed"
        });
      });
    } else {
      Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(
        result => {
          // console.log(result);
          if (result.deletedCount > 0) {
            res.status(200).json({ message: "Deletion successful!" });
          } else {
            res.status(401).json({ message: "Not authorized!" });
          }
        }
      )
      .catch(error => {
        res.status(500).json({
          mmessage: "Fetching post failed"
        });
      });
    }
  }