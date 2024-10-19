import SlugLink from "../models/slugLinkModel.js";
import generateSlug from "../utils/generateSlug.js"

const linkShortner = async (req, res) => {
  try {
    let { slug, link } = req.body;
    if (!link) {
      return res.status(400).json(`Link not provided`);
    }
    if (!slug) {
      slug = await generateSlug();
    }
    const data = {
      slug,
      originalLink: link,
    };

    await SlugLink.create(data);
    return res.status(200).json({
      message: "Link shortend",
      slug: slug,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while shorting link ${error.message}` });
  }
};

export {linkShortner}