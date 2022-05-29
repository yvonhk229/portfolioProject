from django import forms

class ContactMeForm(forms.Form):
    first_name = forms.CharField(widget=forms.TextInput(attrs=
    {'class':'contact_form-input', 'placeholder':'Enter name'}), required=True)
    
    #last_name = forms.CharField(widget=forms.TextInput(attrs=
    # {'class':'form-control', 'placeholder':'Enter last name'}), required=True)
    
    emailid = forms.EmailField(widget=forms.TextInput(attrs=
    {'class':'contact_form-input', 'placeholder':'Enter email'}), required=True)
    
    #phone_number = forms.CharField(widget=forms.TextInput(attrs=
    # {'class':'form-control', 'placeholder':'Enter phone number'}))
    
    
    subject = forms.CharField(widget=forms.TextInput(attrs=
    {'class':'contact_form-input', 'placeholder':'Enter subject'}), required=True)
    
    
    message = forms.CharField(widget=forms.Textarea(attrs=
    {'class':'contact_form-input', 'placeholder':'Enter message'}), required=True)