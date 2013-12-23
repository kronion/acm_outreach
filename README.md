acm_outreach
============

Website for Princeton's ACM Outreach Program

###Adding Modules

Adding modules is extremely simple. Just add your module (as an HTML file) to 
the `public/modules` folder. Then add a module object to the module array in 
`modules.json`. Module objects have the following format:
<br>
```json
{
  "name" : "Your Module Name",
  "description" : "A brief summary of the content of your module",
  "link" : "The name of your file as it appears in the `public/modules` folder.
```
<br>
That's it!
