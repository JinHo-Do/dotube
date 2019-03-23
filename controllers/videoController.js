import routes from '../routes/routes';
import Video from '../models/video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render('main', {
      pageTitle: 'Home',
      videos,
    });
  } catch (error) {
    console.log(error);
    res.render('home', {
      pageTitle: 'Home',
      videos: [],
    });
  }
};

export const search = (req, res) => {
  const {
    query: { search_query: searchingBy },
  } = req;

  res.render('search', {
    pageTitle: 'Search',
    searchingBy,
  });
};

export const getUpload = (req, res) => {
  res.render('upload', {
    pageTitle: 'Upload',
  });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log('newVideo: ', newVideo);

  // TODO: Upload video and save
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => {
  res.render('videoDetail', {
    pageTitle: 'Video Detail',
  });
};

export const editVideo = (req, res) => {
  res.render('editVideo', {
    pageTitle: 'Edit Video',
  });
};

export const deleteVideo = (req, res) => {
  res.render('deleteVideo', {
    pageTitle: 'Delete Video',
  });
};
