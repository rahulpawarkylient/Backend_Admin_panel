import bannerModel from "../models/adminModels/bannerModel.js";
import navbarModel from "../models/adminModels/NavbarModel.js";
import registerModel from "../models/adminModels/registerModel.js";
import serviceModel from "../models/adminModels/ServiceModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import workModel from "../models/adminModels/WorkModel.js";

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
// export const service = async (req,res) =>{
//   try {
//         const { heading, image, title, description } = req.body;

//         // Create new portfolio item using model and request body
//         const newService = new serviceModel({ heading, image, title, description });

//         // Save new portfolio item to database
//         const savedItem = await newService.save();

//         // Send response with saved portfolio item
//         res.json({ success: true, serviceModel: savedItem });
//       } catch (error) {
//         // Send error response
//         console.log(error.message)
//         res.status(400).json({ success: false, message: error.message });
//       }
// }

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
    heading:heading,
    l1:l1,
    l2:l2,
    l3:l3,
    l4:l4,
    l5:l5,
    l6:l6,
    l7:l7,
    l8:l8,
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
