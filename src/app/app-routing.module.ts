import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'leader-board',
    loadChildren: () => import('./pages/leader-board/leader-board.module').then( m => m.LeaderBoardPageModule)
  },
  {
    path: 'download',
    loadChildren: () => import('./pages/download/download.module').then( m => m.DownloadPageModule)
  },
  {
    path: 'question-page',
    loadChildren: () => import('./pages/question-page/question-page.module').then( m => m.QuestionPagePageModule)
  },
  {
    path: 'score-board',
    loadChildren: () => import('./pages/score-board/score-board.module').then( m => m.ScoreBoardPageModule)
  },
  {
    path: 'worksheet',
    loadChildren: () => import('./pages/worksheet/worksheet.module').then( m => m.WorksheetPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'message-details',
    loadChildren: () => import('./pages/message-details/message-details.module').then( m => m.MessageDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'info-page',
    loadChildren: () => import('./pages/info-page/info-page.module').then( m => m.InfoPagePageModule)
  },
  {
    path: 'text-book',
    loadChildren: () => import('./pages/text-book/text-book.module').then( m => m.TextBookPageModule)
  },
  {
    path: 'question-papers',
    loadChildren: () => import('./pages/question-papers/question-papers.module').then( m => m.QuestionPapersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
