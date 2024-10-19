import SlugLink from "../models/slugLinkModel.js";
const generateUniqueSlug = async () => {
  try {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let slug;
    let isUnique = false;

    while (!isUnique) {
      slug = "";
      for (let i = 0; i < 6; i++) {
        slug += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        const existingSlug = await SlugLink.findOne({ slug });
        if (!existingSlug) {
          isUnique = true;
          break;
        }
      }
    }

    return slug;
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while generating unique slug ${error.message}` });
  }
};

export default generateUniqueSlug;
