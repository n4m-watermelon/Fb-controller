import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { Drawer, Button , Input } from 'antd';

const PAGE_ID = "105201545371759";

function Posts() {
    const { TextArea } = Input;
    const [visible, setVisible] = useState(false);
  const fbPageAccessToken = localStorage.getItem("accessPageToken");
  const [feeds, setFeeds] = useState([]);
  let [openDraw, setOpenDraw] = useState(true);
  const showDrawer = () => {
    setVisible(true);
  };
  const [postText,setPostText]= useState('')

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    const fetchAllPost = async () => {
      const config = {
        url: `https://graph.facebook.com/v12.0/me?fields=feed&access_token=${fbPageAccessToken}`,
        method: "GET",
      };
      let res = await axios(config);
      console.log(res.data.feed);
      setFeeds(res.data.feed);
      //  setPageName(res.data)
    };
    fetchAllPost();
  }, []);
  const sendPostToPage = React.useCallback(() => {
    // setIsPublishing(true);
    window.FB.api(
      `/${PAGE_ID}/feed`,
      "POST",
      {
        message: postText,
        access_token: fbPageAccessToken,
      },
      () => {
        setPostText("");
        // setIsPublishing(false);
      }
    );
  }, [postText, fbPageAccessToken]);
  return (
    <div>
      <h1>Post list</h1>
      <Button onClick={showDrawer} type="primary">Primary Button</Button>
      <div className="overflow-x-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Content</th>
                <th className="py-3 px-6 text-center">Created At</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                {feeds.data?.map(feed=>(
                <tr key={feed.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2"></div>
                    <span className="font-medium">{feed.story ?  feed.story : feed.message || "Không xác định"}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">

                    {dayjs(feed.created_time).format("DD/MM/YYYY HH:mm")}

                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
                  </div>
                </td>
              </tr>
                ))}


            </tbody>
          </table>
        </div>
      </div>
      <Drawer title="Add New Post" placement="right" onClose={onClose} visible={visible}>
       <span>
           Title <span className="text-red-500">*</span>
       </span>
       <TextArea onChange={(e)=>setPostText(e.target.value)} rows={4} />
       <Button className="mt-5" onClick={sendPostToPage} type="primary">Post</Button>
      </Drawer>

    </div>
  );
}

export default Posts;
