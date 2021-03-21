import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MyServiceService } from './../../shared/my-service.service';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-text-book',
  templateUrl: './text-book.page.html',
  styleUrls: ['./text-book.page.scss'],
})
export class TextBookPage implements OnInit {
  allClasses = [];
  pageno = 1;
  pagesize = 10;
  allSubject = [];
  classId;
  subId;
  constructor(
    private service: MyServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private iab: InAppBrowser
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
        console.log(this.allSubject);

        this.loadingController.dismiss();
      });
    });
  }

  openBrowese(download_link) {
    const browser = this.iab.create(download_link, '_system');
    browser.show();
  }
}
