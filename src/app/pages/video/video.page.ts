import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from './../../shared/my-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  allClasses = [];
  pageno = 1;
  pagesize = 10;
  allSubject = [];
  allChapters = [];
  classId;
  subId;
  constructor(
    private service: MyServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllClass(this.pageno, this.pagesize).subscribe((res) => {
        this.allClasses = res.document.records;
        this.loadingController.dismiss();
      });
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  OnClassaChange(ev) {
    this.classId = ev.target.value;
    this.presentLoading().then(() => {
      this.service.getSubjectList(this.classId).subscribe((data) => {
        this.allSubject = data.document.records;
        this.loadingController.dismiss();
      });
    });
  }

  OnSubjectChange(ev) {
    this.subId = ev.target.value;
    this.presentLoading().then(() => {
      this.service.getChapterList(this.subId).subscribe((data) => {
        this.allChapters = data.document.records;
        this.loadingController.dismiss();
      });
    });
  }

  OnChapterChange(ev) {}
}
