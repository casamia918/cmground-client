import { observable, action, runInAction } from 'mobx';
import { observer, inject } from 'mobx-react';

import fetchYoutubeComment from 'lib/fetch-youtube-comment';

export default class YoutubeCommentPickerStore {
  @observable videoName = 'test name';
  @observable videoUrl = '';

  @observable settingNum = 0;

  @observable commentLoadingState = 'NOT_YET'; // NOT_YET | LOADING | LOADED

  @observable comments = [];
  @observable authorHash = {};

  constructor() {

  }

  @action updateSettingNum() {
    this.settingNum += 1;
    console.log(this.settingNum)
  }

  fetchComments() {
    const self = this;
    fetchYoutubeComment(this.videoUrl).then(response => {
      const { allComments, authorHash } = response;
      runInAction(() => {
        self.comments = allComments;
        self.authorHash = authorHash;
      })
    }).catch(console.log)
  }

  @action updateVideoUrl(url) {
    this.videoUrl = url;
  }
}