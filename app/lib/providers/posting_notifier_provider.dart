import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:pet/const/models/posting_model.dart';

final PostingProvider = StateNotifierProvider<PostingNotifier, PostingModel>(
        (ref) => PostingNotifier());

class PostingNotifier extends StateNotifier<PostingModel> {
  PostingNotifier() :
        super(const PostingModel(
          owner_id: 0,
          title: '',
          body: '',
          category: ''));

  void updatePosting(
      {int? owner_id, String? title, String? body, String? category}) {
    state = PostingModel(
        owner_id: owner_id ?? state.owner_id,
        title: title ?? state.title,
        body: body ?? state.body,
        category: category ?? state.category);
  }
}