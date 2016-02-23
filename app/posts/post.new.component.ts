import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, Control } from 'angular2/common';
import { Response } from 'angular2/http';

import { Post, PostService } from '../services/post.service';

@Component({
    selector: 'new-post',
    directives: [FORM_DIRECTIVES],
    providers: [PostService],
    template: `
    <h1 class="topic-header">Create New Post</h1>
    <h3 class="topic-subheader">Write and publish a new post</h3>

    <div
        class="form-invalid"
        *ngIf="!postForm.valid">Form Invalid</div>

    <form
        *ngIf="!resettingForm"
        [ngFormModel]="postForm"
        (ngSubmit)="onSubmit(postForm.value)"
        class="pure-form pure-form-aligned">
        <fieldset>
            <div class="pure-control-group">
                <label for="title">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter the post title text"
                    class="pure-input-1-2"
                    #title="ngForm"
                    [ngFormControl]="postForm.controls['title']">

                <div
                    *ngIf="!title.control.valid && title.control.dirty"
                    class="pure-form-text error">
                  A post title should be at least 5 characters long and contain the word 'justin'
                </div>
            </div>

            <div class="pure-control-group">
                <label for="body">Body</label>
                <textarea
                    id="body"
                    placeholder="Enter the post body text"
                    class="pure-input-1-2"
                    #body="ngForm"
                    [ngFormControl]="postForm.controls['body']">
                </textarea>
                <div
                    *ngIf="!body.control.valid && body.control.dirty"
                    class="pure-form-text error">The post body should be at least 15 characters long.</div>
            </div>

            <div class="pure-controls">
                <button
                    type="submit"
                    [disabled]="!postForm.valid || savingForm == true"
                    class="pure-button pure-button-primary">Submit</button>
            </div>
        </fieldset>
    </form>
    `,
})

export class NewPostComponent {
    fb;
    postForm;
    savingForm = false;
    resettingForm = false;

    constructor(private fb:FormBuilder, private PostService: PostService) {
        this.createForm();
    }

    createForm() {
        let titleValidators = Validators.compose([Validators.required, this.mustBeJustin, Validators.minLength(5)]);
        let bodyValidators = Validators.compose([Validators.required, Validators.minLength(15)]);

        this.postForm = this.fb.group({
            'title': ['', titleValidators],
            'body': ['', bodyValidators]
        });
    }

    onSubmit(formValues: string[]) {
        this.savingForm = true;
        console.log('FORM VALUES', formValues);

        this.PostService.createPost(formValues.title, formValues.body)
        .subscribe((res: Response) => {
                console.log('NEW POST:', res.json());
                this.resetForm();
                this.savingForm = false;
            })
    }

    mustBeJustin(control: Control): { [s: string]: boolean } {
        if (!control.value.toLowerCase().match(/justin/)) {
            return {mustBeJustin: true};
        }
    }

    /**
     * We have to completely recreate the form until NG adds a reset method to the API
     */
    resetForm() {
        this.createForm();
    }
}
