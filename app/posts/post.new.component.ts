import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from 'angular2/common';

@Component({
    selector: 'new-post',
    directives: [FORM_DIRECTIVES],
    template: `
    <h1 class="topic-header">Create New Post</h1>
    <h3 class="topic-subheader">Write and publish a new post</h3>

    <form
        [ngFormModel]="postForm"
        (ngSubmit)="onSubmit(postForm.value)"
        class="pure-form pure-form-aligned">
        <fieldset>
            <div class="pure-control-group">
                <label for="title">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Enter the post title textg"
                    [ngFormControl]="postForm.controls['title']">
            </div>

            <div class="pure-control-group">
                <label for="body">Body</label>
                <textarea
                    id="body"
                    placeholder="Enter the post body text"
                    [ngFormControl]="postForm.controls['body']">
                </textarea>
            </div>

            <div class="pure-controls">
                <button
                    type="submit"
                    [disabled]="!postForm.valid"
                    class="pure-button pure-button-primary">Submit</button>
            </div>
        </fieldset>
    </form>
    `,
})

export class NewPostComponent {
    postForm;

    constructor(fb:FormBuilder) {
        this.postForm = fb.group({
            'title': ['', Validators.required],
            'body': ['']
        });
    }

    onSubmit(formValues: string[]) {
        console.log('FORM VALUES', formValues);
    }
}
