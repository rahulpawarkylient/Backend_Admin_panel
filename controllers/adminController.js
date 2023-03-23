import bannerModel from "../models/adminModels/bannerModel.js";

// Create Banner API
// export const banner = async (req, res) => {
//   try {
//     const { image, title, description } = req.body;

//     // Create new portfolio item using model and request body
//     const newBanner = new bannerModel({ image, title, description });

//     // Save new portfolio item to database
//     const savedItem = await newBanner.save();

//     // Send response with saved portfolio item
//     res.json({ success: true, bannerModel: savedItem });
//   } catch (error) {
//     // Send error response
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// get banner api

export const getBanner = async (req, res) => {

  // try {
  //   const bannerId = req.params.id;
  //   bannerModel.findById(bannerId, (err, banner) => {
  //     if (err) {
  //       res.status(500).send(err);
  //       return;
  //     }
  //     if (!banner) {
  //       res.status(404).send("Banner data not found");
  //       return;
  //     }
  //     res.send(banner);
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: "Something went wrong" });
  // }

  try {
    const bannerData = await bannerModel.find();
    res.status(200).json(bannerData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Update API For Banner

export const editBanner = async (req, res) => {
  //   const { image, title, description } = req.body;
  //   const newBanner = {
  //     image: image,
  //     title: title,
  //     description: description,
  //   };
  //   try {
  //     await bannerModel.findOneAndUpdate( newBanner, { new: true });
  //     res.status(200).json(newBanner);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ message: "Something went wrong" });
  //   }

  const id = req.params.id;
  const { image, title, description } = req.body;

  const newBanner = {
    image: image,
    title: title,
    description: description,
  };
  console.log(id)
  console.log(newBanner)
  
  try {
    await bannerModel.findOneAndUpdate({_id: id}, newBanner, { new: true });
    res.status(200).json(newBanner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

