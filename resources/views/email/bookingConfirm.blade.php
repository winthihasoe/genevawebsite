@component('mail::message')
# Your booking is confirmed!
Start date 
Thank you for using our caregiver service. Hope our caregiver fit with your needs.

@component('mail::button', ['url' => 'https://google.com'])
See booking
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
