
#targetengine "session"
#script "deactivate workflow"


app.removeEventListener("afterOpen", afterOpen, false);
app.removeEventListener("afterSaveAs", afterSaveAs, false);
app.removeEventListener("beforeClose", beforeClose, false);

