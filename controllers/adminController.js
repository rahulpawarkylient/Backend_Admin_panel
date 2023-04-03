import bannerModel from "../models/adminModels/bannerModel.js";
import navbarModel from "../models/adminModels/NavbarModel.js";
import registerModel from "../models/adminModels/registerModel.js";
import serviceModel from "../models/adminModels/ServiceModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import workModel from "../models/adminModels/WorkModel.js";
import connectModel from "../models/adminModels/connectionModel.js";
import latestBlogModel from "../models/adminModels/latestBlogModel.js";
import socialModel from "../models/adminModels/socialModel.js";
import socialModelFb from "../models/adminModels/socialModelFb.js";
import socialModelTw from "../models/adminModels/socialModelTw.js";
import footerModel from "../models/adminModels/footerModel.js";
import biographyModel from "../models/adminModels/BiographyModel.js";
import bioSocialModel from "../models/adminModels/BioSocialModel.js";
import bioEmploymentModel from "../models/adminModels/BioEmploymentModel.js";
import biographySocialModel from "../models/adminModels/BiographySocialModel.js";
import biographyEducationModel from "../models/adminModels/BiographyEducationModel.js";

/* Register Section Start */

// export const register = async (req,res) =>{
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // Check if user with the same email already exists
//     const user = await registerModel.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User with this email already exists' });
//     }

//     // Check if password meets the requirements
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
//     if (!passwordRegex.test(password)) {
//       return res.status(400).json({ message: 'Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character' });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new user
//     const newUser = new registerModel({
//       name,
//       email,
//       password: hashedPassword,
//       isAdmin: true, // set isAdmin to true for admin user
//     });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

/* Register Section End */

/* Login Start */

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await registerModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    // Generate a JWT token
    const token = jwt.sign(
      { user: user.email, id: user._id },
      process.env.JWT_SECRET
    );
    res.status(200).json({ message: "Admin Login Success..", token: token });
  } catch (error) {
    res.status(500).json({ message: "Error while logging in" });
  }
};

/* Login  End */

/* NavBar Section Start */

//Post Api
// export const navbar = async (req, res) => {
//   try {
//     const { logoname, logoslogan, menu1, menu2, menu3, menu4, menu5, menu6 } =
//       req.body;

//     // Create new portfolio item using model and request body
//     const newNavbar = new navbarModel({ logoname, logoslogan, menu1, menu2, menu3, menu4, menu5, menu6 });

//     // Save new portfolio item to database
//     const savedItem = await newNavbar.save();

//     // Send response with saved portfolio item
//     res.json({ success: true, navbarModel: savedItem });
//   } catch (error) {
//     // Send error response
//     console.log(error.message)
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// Get Api
export const navbar = async (req, res) => {
  try {
    const navbarData = await navbarModel.find();
    res.status(200).json(navbarData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update Api

export const updatenav = async (req, res) => {
  const id = req.params.id;
  const { logoname, logoslogan, menu1, menu2, menu3, menu4, menu5, menu6 } =
    req.body;

  const newNavbar = {
    logoname: logoname,
    logoslogan: logoslogan,
    menu1: menu1,
    menu2: menu2,
    menu3: menu3,
    menu4: menu4,
    menu5: menu5,
    menu6: menu6,
  };
  console.log(id);
  console.log(newNavbar);

  try {
    await navbarModel.findByIdAndUpdate(id, newNavbar, { new: true });
    res.status(200).json(newNavbar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* NavBar Section End */

//========================================================================================================
/*Banner Section Start*/

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
  console.log(id);
  console.log(newBanner);

  try {
    await bannerModel.findByIdAndUpdate(id, newBanner, { new: true });
    res.status(200).json(newBanner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/*Banner Section END*/
//==========================================================================================================

/*Iduk------Service Section*/

//Post Api
export const addService = async (req, res) => {
  try {
    const { heading, image, title, description } = req.body;

    // Create new portfolio item using model and request body
    const newService = new serviceModel({ heading, image, title, description });

    // Save new portfolio item to database
    const savedItem = await newService.save();

    // Send response with saved portfolio item
    res.json({ success: true, serviceModel: savedItem });
  } catch (error) {
    // Send error response
    console.log(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

//Get Api
export const service = async (req, res) => {
  try {
    const serviceData = await serviceModel.find();
    res.status(200).json(serviceData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Get api By id
export const oneService = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    serviceModel.findById(id, (err, services) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (!services) {
        res.status(404).send("User not found");
        return;
      }
      res.send(services);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Update Api

export const Updateservice = async (req, res) => {
  const id = req.params.id;
  const { heading, image, title, description } = req.body;

  const newService = {
    heading: heading,
    image: image,
    title: title,
    description: description,
  };
  console.log(id);
  console.log(newService);

  try {
    await serviceModel.findByIdAndUpdate(id, newService, { new: true });
    res.status(200).json(newService);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/*Iduk------Service Section End*/

/*Work Swction is Start*/

//Post api

// export const Work = async (req, res) => {
//   try {
//     const { heading, l1,l2,l3,l4,l5,l6,l7,l8 } = req.body;

//     // Create new portfolio item using model and request body
//     const newWork = new workModel({ heading, l1,l2,l3,l4,l5,l6,l7,l8 });

//     // Save new portfolio item to database
//     const savedItem = await newWork.save();

//     // Send response with saved portfolio item
//     res.json({ success: true, serviceModel: savedItem });
//   } catch (error) {
//     // Send error response
//     console.log(error.message);
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

//Get api
export const Work = async (req, res) => {
  try {
    const workData = await workModel.find();
    res.status(200).json(workData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Update Api

export const UpdateWork = async (req, res) => {
  const id = req.params.id;
  const { heading, l1, l2, l3, l4, l5, l6, l7, l8 } = req.body;

  const newWork = {
    heading: heading,
    l1: l1,
    l2: l2,
    l3: l3,
    l4: l4,
    l5: l5,
    l6: l6,
    l7: l7,
    l8: l8,
  };
  console.log(id);
  console.log(newWork);

  try {
    await workModel.findByIdAndUpdate(id, newWork, { new: true });
    res.status(200).json(newWork);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/*Work Swction is End*/

/*Connects And Nurture Them Section  Start*/

//Post APi
export const addConnect = async (req, res) => {
  try {
    const { heading, image, title, description } = req.body;

    const newConnect = await connectModel({
      heading,
      image,
      title,
      description,
    });

    const savedItem = await newConnect.save();

    res.json({ success: true, connectModel: savedItem });
  } catch (error) {
    console.log(error.message);
    res.send(500).json({ success: false, message: error.message });
  }
};

//Get Api
export const connect = async (req, res) => {
  try {
    const connectData = await connectModel.find();
    res.status(200).json(connectData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Get api By id
export const oneConnect = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    connectModel.findById(id, (err, connect) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (!connect) {
        res.status(404).send("User not found");
        return;
      }
      res.send(connect);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Update Api
export const updateConnect = async (req, res) => {
  const id = req.params.id;
  const { heading, image, title, description } = req.body;

  const newConnect = {
    heading,
    image,
    title,
    description,
  };

  try {
    await connectModel.findByIdAndUpdate(id, newConnect, { new: true });
    res.status(200).json(newConnect);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/*Connects And Nurture Them Section  End*/

/*Latest Article Section  Start*/

//Post Api
export const latestBlog = async (req, res) => {
  try {
    const { heading, image, title, description } = req.body;

    const newBlog = await latestBlogModel({
      heading,
      image,
      title,
      description,
    });

    const savedItem = await newBlog.save();

    res.json({ success: true, latestBlogModel: savedItem });
  } catch (error) {
    console.log(error.message);
    res.send(500).json({ success: false, message: error.message });
  }
};

//Get Api
export const allLatestBlog = async (req, res) => {
  try {
    const blogData = await latestBlogModel.find();
    res.status(200).json(blogData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Get api By id
export const oneLatestBlog = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    latestBlogModel.findById(id, (err, blog) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (!blog) {
        res.status(404).send("User not found");
        return;
      }
      res.send(blog);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Update Api
export const updateLatestBlog = async (req, res) => {
  const id = req.params.id;
  const { heading, image, title, description } = req.body;

  const newBlog = {
    heading,
    image,
    title,
    description,
  };

  try {
    await latestBlogModel.findByIdAndUpdate(id, newBlog, { new: true });
    res.status(200).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/*Latest Article Section  End*/

/* social Section Start*/

// Post API
export const social = async (req, res) => {
  try {
    const { image, heading } = req.body;
    const newSocial = new socialModel({ image, heading });
    const saveSocial = await newSocial.save();
    res.status(200);
    res.json({ success: true, socialModel: saveSocial });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// Get API
export const getsocial = async (req, res) => {
  try {
    const socialData = await socialModel.find();
    res.status(200).json(socialData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get API BY ID
export const getIdsocial = async (req, res) => {
  const id = req.params.id;
  try {
    const socialData = await socialModel.findById(id);
    res.status(200).json(socialData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update API
export const updateSocial = async (req, res) => {
  const id = req.params.id;
  const { image, heading } = req.body;

  const newSocial = {
    image: image,
    heading,
    heading,
  };
  try {
    await socialModel.findByIdAndUpdate(id, newSocial, { new: true });
    res.status(200).json(newSocial);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete API By Id
export const deleteOneSocial = async (req, res) => {
  const id = req.params.id;
  try {
    await socialModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* social Section End */

/* FaceBook Section Start */

// Post API
export const socialfb = async (req, res) => {
  try {
    const { image, url } = req.body;
    const newSocialFb = new socialModelFb({ image, url });
    const saveSocialFb = await newSocialFb.save();
    res.status(200);
    res.json({ success: true, socialModelFb: saveSocialFb });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// Get API
export const getsocialfb = async (req, res) => {
  try {
    const socialFbData = await socialModelFb.find();
    res.status(200).json(socialFbData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get BY Id
export const getIdsocialfb = async (req, res) => {
  const id = req.params.id;
  try {
    const socialFbData = await socialModelFb.findById(id);
    res.status(200).json(socialFbData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update BY ID
export const updateIdsocialfb = async (req, res) => {
  const id = req.params.id;
  const { image, url } = req.body;
  const newSocialFb = {
    image: image,
    url: url,
  };
  try {
    await socialModelFb.findByIdAndUpdate(id, newSocialFb, { new: true });
    res.status(200).json(newSocialFb);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};


//Delete By ID
export const deleteOnefb = async (req, res) => {
  const id = req.params.id;
  try {
    await socialModelFb.findByIdAndDelete(id);
    res.status(200).json({ message: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* FaceBook Section End */

/* Twitter Section Start */
// Post API
export const socialTw = async (req, res) => {
  try {
    const { image, url } = req.body;
    const newSocialTw = new socialModelTw({ image, url });
    const saveSocialTw = await newSocialTw.save();
    res.status(200);
    res.json({ success: true, socialModelTw: saveSocialTw });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// GET API
export const getsocialTw = async (req, res) => {
  try {
    const socialTwData = await socialModelTw.find();
    res.status(200).json(socialTwData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// GET BY ID
export const getIdsocialTw = async (req, res) => {
  const id = req.params.id;
  try {
    const socialTwData = await socialModelTw.findById(id);
    res.status(200).json(socialTwData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update BY ID
export const updateIdsocialTw = async (req, res) => {
  const id = req.params.id;
  const { image, url } = req.body;
  const newSocialTw = {
    image: image,
    url: url,
  };
  try {
    await socialModelTw.findByIdAndUpdate(id, newSocialTw, { new: true });
    res.status(200).json(newSocialTw);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Delete By ID
export const deleteOnetw = async (req, res) => {
  const id = req.params.id;
  try {
    await socialModelTw.findByIdAndDelete(id);
    res.status(200).json({ message: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};


/* Twitter Section End */

/* Footer Section Start*/

// Post API
export const footer = async (req, res) => {
  try {
    const {
      headingAbout,
      description,
      headingContact,
      email,
      mobile,
      address,
    } = req.body;
    const newFooter = new footerModel({
      headingAbout,
      description,
      headingContact,
      email,
      mobile,
      address,
    });
    const saveFooter = await newFooter.save();
    res.status(200);
    res.json({ success: true, footerModel: saveFooter });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// GET API
export const getfooter = async (req, res) => {
  try {
    const footerData = await footerModel.find();
    res.status(200).json(footerData);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update API
export const updatefooter = async (req, res) => {
  const id = req.params.id;
  const { headingAbout, description, headingContact, email, mobile, address } =
    req.body;
  const newFooter = {
    headingAbout: headingAbout,
    description: description,
    headingContact: headingContact,
    email: email,
    mobile: mobile,
    address: address,
  };
  try {
    await footerModel.findByIdAndUpdate(id, newFooter, { new: true });
    res.status(200).json(newFooter);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* Footer Section End*/

/* Biography Section  Start*/

// POST API

export const biography = async (req, res) => {
  try {
    const {
      image,
      imageName,
      mainHeading,
      personalInfoTitle,
      email,
      address,
      mobile,
    } = req.body;
    const newbiography = new biographyModel({
      image,
      imageName,
      mainHeading,
      personalInfoTitle,
      email,
      address,
      mobile,
    });
    const savebiography = await newbiography.save();
    res.status(200);
    res.json({ success: true, biographyModel: savebiography });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// GET API

export const getbiography = async (req, res) => {
  try {
    const biographyData = await biographyModel.find();
    res.status(200).json(biographyData);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// PUT API

export const updatebiography = async (req, res) => {
  const id = req.params.id;
  const {
    image,
    imageName,
    mainHeading,
    personalInfoTitle,
    email,
    address,
    mobile,
  } = req.body;
  const newbiography = {
    image: image,
    imageName: imageName,
    mainHeading: mainHeading,
    personalInfoTitle: personalInfoTitle,
    email: email,
    address: address,
    mobile: mobile,
  };
  try {
    await biographyModel.findByIdAndUpdate(id, newbiography, { new: true });
    res.status(200).json(newbiography);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* Biography Section  End*/


/* Biography personal Social Section  Start*/

// POST API

export const bioSocial = async (req, res) => {
  try {
    const {
      title,
      p1,
      p2,
      p3,
    } = req.body;
    const newbiography = new bioSocialModel({
      title,
      p1,
      p2,
      p3,
    });
    const savebiography = await newbiography.save();
    res.status(200);
    res.json({ success: true, biographyModel: savebiography });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// GET API

export const getbioSocial = async (req, res) => {
  try {
    const biographyData = await bioSocialModel.find();
    res.status(200).json(biographyData);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// PUT API

export const updatebioSocial = async (req, res) => {
  const id = req.params.id;
  const {
    title,
    p1,
    p2,
    p3,
  } = req.body;
  const newbiography = {
    title: title,
    p1: p1,
    p2: p2,
    p3: p3,
  };
  try {
    await bioSocialModel.findByIdAndUpdate(id, newbiography, { new: true });
    res.status(200).json(newbiography);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* Biography personal Social Section  End*/

/* Biography Employment Section  Start*/

// POST API

export const bioEmployment = async (req, res) => {
  try {
    const {
      title,
      p1,
      p2,
      p3,
      p4,
    } = req.body;
    const newbioEmployment = new bioEmploymentModel({
      title,
      p1,
      p2,
      p3,
      p4,
    });
    const savebioEmploy = await newbioEmployment.save();
    res.status(200);
    res.json({ success: true, bioEmploymentModel: savebioEmploy });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// GET API

export const getbioEmployment = async (req, res) => {
  try {
    const bioEmploymentData = await bioEmploymentModel.find();
    res.status(200).json(bioEmploymentData);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// PUT API

export const updatebioEmployment = async (req, res) => {
  const id = req.params.id;
  const {
    title,
    p1,
    p2,
    p3,
    p4,
  } = req.body;
  const newbiography = {
    title: title,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4,
  };
  try {
    await bioEmploymentModel.findByIdAndUpdate(id, newbiography, { new: true });
    res.status(200).json(newbiography);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

/* Biography personal Social Section  End*/



/* Biography Social Section  Start*/

// POST API

export const biographySocial = async (req, res) => {
  try {
    const {
      socialHeading,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      p12,
      p13,
      p14,
      p15,
      p16,
      p17,
      p18,
      p19,
    } = req.body;
    const newbiographySocial = new biographySocialModel({
      socialHeading,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      p7,
      p8,
      p9,
      p10,
      p11,
      p12,
      p13,
      p14,
      p15,
      p16,
      p17,
      p18,
      p19,
    });
    const savebiographySocial = await newbiographySocial.save();
    res.status(200);
    res.json({ success: true, biographySocialModel: savebiographySocial });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};

// GET API

export const getbiographySocial = async (req, res) => {
  try {
    const biographySocialData = await biographySocialModel.find();
    res.status(200).json(biographySocialData);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// PUT API

export const updatebiographySocial = async (req, res) => {
  const id = req.params.id;
  const {
    socialHeading,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
  } = req.body;
  const newbiographySocial = {
    socialHeading: socialHeading,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4,
    p5: p5,
    p6: p6,
    p7: p7,
    p8: p8,
    p9: p9,
    p10: p10,
    p11: p11,
    p12: p12,
    p13: p13,
    p14: p14,
    p15: p15,
    p16: p16,
    p17: p17,
    p18: p18,
    p19: p19,
  };
  try {
    await biographySocialModel.findByIdAndUpdate(id, newbiographySocial, {
      new: true,
    });
    res.status(200).json(newbiographySocial);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};



/* Biography Education Section  Start*/
// POST
export const biographyEducation = async (req, res) => {
  try {
    const { educationHeading, p1, p2, p3, p4, p5, p6 } = req.body;
    const newbiographyEducation = new biographyEducationModel({
      educationHeading,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
    });
    const savebiographyEducation = await newbiographyEducation.save();
    res.status(200);
    res.json({
      success: true,
      biographyEducationModel: savebiographyEducation,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Data created Unsuccessfull" });
  }
};


//GET

export const getbiographyEducation = async (req, res) => {
  try {
    const biographyEducationData = await biographyEducationModel.find();
    res.status(200).json(biographyEducationData);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// PUT

export const updatebiographyEducation = async(req,res) =>{
  const id = req.params.id;
  const {
    educationHeading,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,  
  } = req.body;
  const newbiographyEducation = {
    educationHeading: educationHeading,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4,
    p5: p5,
    p6: p6,
  };
  try {
    await biographyEducationModel.findByIdAndUpdate(id, newbiographyEducation, {
      new: true,
    });
    res.status(200).json(newbiographyEducation);
  } catch (error) {
    console.log(error, message);
    res.status(500).json({ message: "Something went wrong" });
  }
};